import { db } from '@/db/client';
import { tasks } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

export default async function TaskDetail({ params }: { params: { id: string } }) {
  // Fetch the task by ID using eq function from Drizzle ORM
  const task = await db
    .select()
    .from(tasks)
    .where(eq(tasks.id, parseInt(params.id, 10))) // Correct usage of eq function
    .all(); // Fetch all matching rows

  // Retrieve the first task from the result
  const selectedTask = task[0];

  // Handle if the task is not found
  if (!selectedTask) {
    return notFound(); // Return 404 page if task is not found
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">{selectedTask.title}</h1>
      <p className="mb-2">Due Date: {selectedTask.dueDate}</p>
      <p className="mb-4">{selectedTask.description}</p>
      {/* Add edit and delete buttons here */}
    </div>
  );
}
