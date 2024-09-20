// src/app/[id]/edit/page.tsx
'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function EditTask({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`/api/tasks/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        dueDate,
      }),
    });

    if (response.ok) {
      router.push('/');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
        />
      </div>
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="input"
        />
      </div>
      <button type="submit" className="btn">
        Update Task
      </button>
    </form>
  );
}
