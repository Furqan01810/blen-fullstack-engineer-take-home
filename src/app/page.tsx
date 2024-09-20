// src/app/page.tsx
import { Button } from '@/components/ui/Button'; // Example of using a component from shadcn/ui
import { db } from '@/db/client';
import { tasks } from '@/db/schema';
import Link from 'next/link';

export default async function Home() {
  const allTasks = await db.select().from(tasks).all();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Task List</h1>
      <ul>
        {allTasks.map((task) => (
          <li key={task.id} className="mb-2">
            <Link href={`/${task.id}`}>
              {task.title} - Due on {task.dueDate}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/add">
        <Button>Add New Task</Button>
      </Link>
    </div>
  );
}
