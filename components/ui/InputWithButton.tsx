import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

interface InputWithButtonProps {
  onTaskAdded: (newTask: { id: string; tasks: string }) => void;
  darkMode: boolean
}

export function InputWithButton({ onTaskAdded , darkMode}: InputWithButtonProps) {
  const [task, setTask] = useState('');

  const handleAddTask = async () => {
    if (!task.trim()) return;

    try {
      const response = await axios.post('http://localhost:3000/api/lists', { tasks: task });
      const newTask = response.data.data;
      onTaskAdded(newTask);
      setTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className={`flex w-full max-w-sm items-center space-x-2 ${darkMode ? 'bg-slate-600 text-white' : ''}`}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={`border p-2 ${darkMode ? 'bg-slate-600 text-white border-slate-600' : ''}`}
        placeholder="Enter a task"
      />
      <Button onClick={handleAddTask} className={darkMode ? 'border-y-indigo-400 text-white' : ''}>Add Task</Button>
    </div>
  );
}
