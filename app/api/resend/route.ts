import { NextResponse } from 'next/server';
import VercelInviteUserEmail from '../../../components/vercel-email';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = 're_iRqo9oXt_BkDJN3XBiT9CFLcyTJH2UBg2';

export async function POST () {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: '夜游船 <newsletter@yeyouchuan.me>',
      to: ['yeyouchuan@gmail.com'],
      subject: "欢迎订阅不着陆！",
      react: VercelInviteUserEmail({ username: "Mark" }) as React.ReactElement,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}
