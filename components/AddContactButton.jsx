'use client';

import React, { useState, useRef } from 'react';
import { Toaster, toast } from 'sonner'

const AddContactAndSendEmail = () => {
  const [email, setEmail] = useState('');

  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const handleSubmit = async () => {
    try {
      toast.promise(promise, {
        loading: 'Loading...',
        success: () => {
          return `订阅成功！`;
        },
      });

      // 添加联系人
      const addContactResponse = await fetch('/api/addContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      // 发送欢迎邮件
      const sendEmailResponse = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      setEmail('');

      return NextResponse.json(
        {
          message: 'success',
          sendEmailResponse,
          addContactResponse,
        },
        {
          status: 201,
        }
      )
    } catch (error) {
      return NextResponse.json({ error }, { status: 400 })
    }
  };

  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className='px-10 py-8 sm:py-20 flex flex-col max-w-[500px] mx-auto'>
      <h2 className='text-white text-2xl font-bold'>订阅不着陆</h2>
      <p className='my-6 text-gray-200'>如果希望知道不着陆的最新进展，不妨输入邮箱订阅一下，你应该会受到一封欢迎邮件~</p>
      <div className='flex flex-col gap-4'>
        <div className='relative'>
          <input
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            autoComplete="off"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="h-12 w-full cursor-default rounded-md border border-neutral-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors  duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[rgb(250, 255, 255)] focus:outline-none"
          />
          <input
            ref={divRef}
            disabled
            style={{
              border: "1px solid rgb(250, 255, 255)",
              opacity,
              WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
            }}
            aria-hidden="true"
            className="border-[rgb(250, 255, 255)] pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
          />
        </div>
        <button onClick={handleSubmit} className='text-white text-sm bg-[#111111] hover:bg-[#262626] rounded-md border-gray-700 border py-2 px-3 w-fit'>
            Subscribe
        </button>
      </div>
      <Toaster richColors theme='dark'  />
    </div>
  );
};

export default AddContactAndSendEmail;
