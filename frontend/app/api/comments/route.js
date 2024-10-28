import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const res = await axios.get('http://localhost:5000/api/comments');
  return NextResponse.json(res.data);
}

export async function POST(request) {
  const body = await request.json();
  const res = await axios.post('http://localhost:5000/api/comments', body);
  return NextResponse.json(res.data);
}
