// app/api/send/addContact.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = 're_iRqo9oXt_BkDJN3XBiT9CFLcyTJH2UBg2';

export async function POST() {
  const res = await fetch('https://api.resend.com/audiences/2efb8219-b177-4619-b8ab-025b82edb5d0/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      email: 'hello@yeyouchuan.com',
      first_name: 'Alan',
      last_name: 'Wu',
      unsubscribed: false,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}