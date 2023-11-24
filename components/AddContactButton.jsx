'use client';

import React, { useState } from 'react';
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
    } catch (error) {
    }
  };

  return (
    <div className='px-10 py-6 border border-[#262626] bg-[#141414]/50 rounded-lg flex flex-col'>
      <h2 className='text-white text-2xl font-bold mb-4'>订阅不着陆</h2>
      <div className='flex gap-1'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className='text-gray-300 bg-[#262626] rounded-md border-gray-600 border py-2 px-4'
        />
        <button onClick={handleSubmit} className='text-white bg-[#262626] rounded-md border-gray-600 border py-2 px-4'>
          Subscribe
        </button>
      </div>
      <Toaster richColors theme='dark'  />
    </div>
  );
};

export default AddContactAndSendEmail;
