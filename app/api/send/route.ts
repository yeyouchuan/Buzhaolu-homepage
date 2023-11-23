import VercelInviteUserEmail from '../../../components/vercel-email';
import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

  const { email } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: '夜游船 <newsletter@yeyouchuan.me>',
      to: [email],
      subject: "欢迎订阅不着陆！",
      react: VercelInviteUserEmail({ username: "订阅者" }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
