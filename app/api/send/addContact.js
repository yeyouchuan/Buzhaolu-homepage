// pages/api/addContact.js
import { Resend } from 'resend';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { email, firstName, lastName } = req.body;

        const resend = new Resend(process.env.RESEND_API_KEY);
  
        const response = await fetch('https://api.resend.com/audiences/2efb8219-b177-4619-b8ab-025b82edb5d0/contacts', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ${process.env.RESEND_API_KEY}',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            first_name: firstName,
            last_name: lastName,
            unsubscribed: true // 根据需要设置
          }),
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        res.status(200).json({ message: 'Contact added successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  