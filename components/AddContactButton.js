import React from 'react';

const AddContactButton = () => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('/api/addContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'hello@yeyouchuan.com',
          first_name: 'Alan',
          last_name: 'Wu',
          unsubscribed: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Contact added:', data);
      alert('Contact added successfully');
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('Failed to add contact');
    }
  };

  return (
    <button onClick={handleButtonClick}>
      Add Contact
    </button>
  );
};

export default AddContactButton;
