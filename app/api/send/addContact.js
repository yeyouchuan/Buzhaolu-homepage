// app/api/send/addContact.js
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function handler(req) {
  if (req.method === 'POST') {
    try {
      const { email, firstName, lastName } = await req.json();

      const response = await fetch('https://api.resend.com/audiences/78261eea-8f8b-4381-83c6-79fa7120f1cf/contacts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`, // 替换为您的 Resend API 密钥
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          first_name: firstName,
          last_name: lastName,
          unsubscribed: true, // 根据需要调整
        }),
      });

      if (response.ok) {
        // 请求成功处理
        const data = await response.json();
        return NextResponse.json(
          {
            email: data.email,
            firstName: data.first_name,
            lastName: data.last_name,
          },
          { status: 200 },
        )
      } else {
        // 请求失败处理
        const errorData = await response.text();
        return new NextResponse(errorData, { status: response.status });
      }
    } catch (error) {
      // 捕获错误
      return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
  } else {
    // 如果不是 POST 请求，返回 405 Method Not Allowed
    return new NextResponse('Method Not Allowed', { status: 405 });
  }
}
