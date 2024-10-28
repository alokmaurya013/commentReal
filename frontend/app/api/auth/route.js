'use server'; // Ensure this is a server-side function

import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  try {
    // Directly call your backend API without hardcoding the URL if running together
    const res = await fetch('http://localhost:5000/api/auth/login', { // Match the backend API route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
