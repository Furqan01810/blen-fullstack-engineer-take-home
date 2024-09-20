// src/app/add/page.tsx
'use client'; // This marks the component as a Client Component

import { useRouter } from 'next/navigation'; // Correct hook for navigation in the App Router
import { useState } from 'react';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const router = useRouter(); // Now you can use this hook

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title, description, dueDate }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.push('/'); // Navigate to home after successful task creation
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
}
