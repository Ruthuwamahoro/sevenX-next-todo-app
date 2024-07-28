import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

interface InputWithButtonProps {
  onTaskAdded: (newTask: { id: string; tasks: string }) => void;
}

export function InputWithButton({ onTaskAdded}: InputWithButtonProps) {
  const [task, setTask] = useState('');

  const handleAddTask = async () => {
    if (!task.trim()) return;

    try {
      const response = await axios.post('/api/lists', { tasks: task });
      const newTask = response.data.data;
      onTaskAdded(newTask);
      setTask('');
    } catch (error) {
      return error
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 pb-5">
     <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter a task"
      />
      <Button type="submit" onClick={handleAddTask}>Add Task</Button>
    </div>
  )
}

