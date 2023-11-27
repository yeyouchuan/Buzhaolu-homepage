'use client'

import { useState } from 'react';

export default function Circle() {
  const [gradientVisible, setGradientVisible] = useState(true);
  const [maskPosition, setMaskPosition] = useState({ x: 10, y: 10 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 设置边缘阈值，比如20px
    const edgeThreshold = 20;
    const outsideEdge =
      x < -edgeThreshold ||
      y < -edgeThreshold ||
      x > rect.width + edgeThreshold ||
      y > rect.height + edgeThreshold;

    setGradientVisible(!outsideEdge);
    setMaskPosition({ x, y });
  };

  return (
    <div
      className="relative w-96 h-96 bg-black overflow-hidden rounded-3xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGradientVisible(false)} // 鼠标离开时渐变消失
    >
      {/* 根据 gradientVisible 状态应用渐变文本 */}
      {gradientVisible && (
        <p
          className="absolute top-0 left-0 w-full h-full rounded-lg whitespace-pre text-sm font-serif bg-clip-text codebg text-transparent"
          aria-hidden="true"
        >
          {generateRandomString()}
        </p>
      )}

      {/* 遮罩层 */}
      {gradientVisible && (
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at ' + maskPosition.x + 'px ' + maskPosition.y + 'px, transparent 100px, rgba(0, 0, 0, 1) 250px)',
          }}
        />
      )}

      {/* 中间的黑色固定圆圈 */}
      <div className="absolute left-1/2 top-1/2 w-60 h-60 blur-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black/90 to-black/0 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

// 生成一个足以覆盖整个容器的随机字符串
function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsPerRow = 50; // 根据实际容器宽度和字体大小调整
  const rows = 20; // 根据实际容器高度和字体大小调整
  let string = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < charsPerRow; j++) {
      string += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    string += '\n'; // New line to form a square block of text
  }
  return string;
}
