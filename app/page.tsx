'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { TodoList } from '@/components/TodoList';
import { InputWithButton } from '@/components/ui/InputWithButton';

interface Task {
  id: string;
  tasks: string;
}

interface User {
  name: string;
  image: string;
  email: string;
}

export default function Page() {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDisplay = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ data: Task[] }>('/api/lists');
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleDisplay();
  }, []);

  const handleTaskPost = (newTask: Task) => {
    setData((prevData) => 
      [...prevData, newTask]);
    handleDisplay()

  };

  const handleTaskDeleted = (id: string) => {
    setData((prevData) => prevData.filter((task) => task.id !== id));
  };

  const handleTaskUpdated = (id: string, newTask: string) => {
    setData((prevData) =>
      prevData.map((task) => (task.id === id ? { ...task, tasks: newTask } : task))
    );
  };

  return (
    <div>
      <main className="flex items-center justify-center p-24 min-h-screen">
        <div>
          <h1 className="text-center pb-5 font-semibold text-lg">Todo List App</h1>
          <div className='bg-white-50 p-5 rounded-lg shadow-inner overflow-y-auto'>
            <InputWithButton TaskAdded={handleTaskPost} />
            {loading ? <p>Loading...</p> : <TodoList items={data} DeleteTask={handleTaskDeleted} updateTask={handleTaskUpdated} />}
          </div>
        </div>
      </main>
    </div>
  );
}
