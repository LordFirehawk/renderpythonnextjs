import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://renderpythonnextjs-backend.onrender.com/beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Next team landed' }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Beta API');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error calling Beta API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
// Test
