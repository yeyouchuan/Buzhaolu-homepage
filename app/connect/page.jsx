'use client'

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState(''); // 用于显示消息

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(''); // 清除之前的消息
    try {
      const response = await fetch('/api/send/addContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data.message);
        setMessage('Contact added successfully!'); // 显示成功消息
        // 可选：提交成功后重置表单
        setEmail('');
        setFirstName('');
        setLastName('');
      } else {
        // 服务器返回了错误状态
        console.error('Server error:', response.status);
        setMessage('Error adding contact. Please try again.'); // 显示错误消息
      }
    } catch (error) {
      // 网络错误或请求无法完成
      console.error('Request failed:', error);
      setMessage('Network error. Please try again.'); // 显示网络错误消息
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* 显示消息 */}
    </>
  );
}
