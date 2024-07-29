'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { TodoItem, TodoList } from '@/components/TodoList';
import { InputWithButton } from '@/components/ui/InputWithButton';

export default function Page() {
  const [data, setData] = useState<TodoItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  const handleDisplay = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ data: TodoItem[] }>('/api/lists');
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

  const handleTaskPost = (newTask: TodoItem) => {
    console.log('new added task', newTask)
    const updatedData:TodoItem[]  = data == null? [newTask] : [...data, newTask];
    setData(updatedData);
  };

  const handleTaskDeleted = (id: string) => {
    if(data == null) return;
    const updatedData:TodoItem[]  =  data.filter((task) => task.id !== id);
    setData(updatedData);
  };

  const handleTaskUpdated = (id: string, newTask: string) => {
    if(data == null) return;
    const updatedData:TodoItem[]  =  data.map((task) => (task.id === id ? { ...task, tasks: newTask } : task))
    setData(updatedData);
  };

  return (
    <div>
      <main className="flex items-center justify-center p-24 min-h-screen">
        <div>
          <h1 className="text-center pb-5 font-semibold text-lg">Todo List App</h1>
          <div className='bg-white-50 p-5 rounded-lg shadow-inner overflow-y-auto'>
            <InputWithButton TaskAdded={handleTaskPost} />
            {loading && data === null ? <p>Loading...</p> : data !==null && <TodoList items={data} DeleteTask={handleTaskDeleted} updateTask={handleTaskUpdated} />}
          </div>
        </div>
      </main>
    </div>
  );
}
