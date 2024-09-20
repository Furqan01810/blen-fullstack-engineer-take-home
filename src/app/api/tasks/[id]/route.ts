import { db } from '@/db/client';
import { tasks } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { title, description, dueDate } = await request.json();

  // Validate required fields
  if (!title || !dueDate) {
    return NextResponse.json({ error: 'Title and due date are required' }, { status: 400 });
  }

  // Update the task using the correct `where` clause with `eq`
  await db
    .update(tasks)
    .set({ title, description, dueDate })
    .where(eq(tasks.id, parseInt(params.id, 10))); // Correct usage of `eq`

  return NextResponse.json({ message: 'Task updated successfully' }, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  // Delete the task using the correct `where` clause with `eq`
  await db.delete(tasks).where(eq(tasks.id, parseInt(params.id, 10))); // Correct usage of `eq`

  return NextResponse.json({ message: 'Task deleted successfully' }, { status: 200 });
}
