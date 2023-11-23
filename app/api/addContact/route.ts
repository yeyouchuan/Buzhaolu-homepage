// app/api/addContact/route.ts
import { NextResponse, NextRequest } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  const { email, first_name, last_name, unsubscribed } = await request.json();

  const res = await fetch('https://api.resend.com/audiences/2efb8219-b177-4619-b8ab-025b82edb5d0/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      first_name: first_name || 'DefaultFirstName',
      last_name: last_name || 'DefaultLastName',
      unsubscribed: unsubscribed || false,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  } else {
    // 处理错误
    return NextResponse.json({ error: 'Unable to add contact' });
  }
}
