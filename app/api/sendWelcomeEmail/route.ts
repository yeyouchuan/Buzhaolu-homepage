import { NextResponse, NextRequest } from 'next/server';
import VercelInviteUserEmail from '../../../components/vercel-email';
import * as React from 'react';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST (request: NextRequest) {

    const { email } = await request.json();
    
    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: '夜游船 <newsletter@yeyouchuan.me>',
            to: [email],
            subject: "欢迎订阅不着陆！",
            react: VercelInviteUserEmail({ username: "yeyouchuan" }) as React.ReactElement,
        }),
    });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}