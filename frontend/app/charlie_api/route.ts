import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://renderpythonnextjs-backend.onrender.com/charlie', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Charlie API');
    }

    const data = await response.text();
    return NextResponse.json({ message: data });
  } catch (error) {
    console.error('Error calling Charlie API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
