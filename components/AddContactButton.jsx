'use client';

import React, { useState } from 'react';

const AddContactAndSendEmail = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      // 添加联系人
      const addContactResponse = await fetch('/api/addContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!addContactResponse.ok) {
        throw new Error('Failed to add contact');
      }

      // 发送欢迎邮件
      const sendEmailResponse = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!sendEmailResponse.ok) {
        throw new Error('Failed to send email');
      }

      alert('Contact added and welcome email sent successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className='text-black bg-white rounded-md border-gray-600 border'
      />
      <button onClick={handleSubmit} className='text-white bg-gray-800 rounded-md border-gray-600 border'>
        Subscribe
      </button>
    </div>
  );
};

export default AddContactAndSendEmail;
