// src/app/api/tasks/route.ts
import { db } from '@/db/client';
import { tasks } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { title, description, dueDate } = await request.json();

  if (!title || !dueDate) {
    return NextResponse.json({ error: 'Title and due date are required' }, { status: 400 });
  }

  await db.insert(tasks).values({ title, description, dueDate });

  return NextResponse.json({ message: 'Task added successfully' }, { status: 201 });
}

export async function GET() {
  const allTasks = await db.select().from(tasks).all();
  return NextResponse.json(allTasks);
}
