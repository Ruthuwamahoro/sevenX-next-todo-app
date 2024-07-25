"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { TodoList } from '@/components/TodoList';
import { InputWithButton } from '@/components/ui/InputWithButton';
import { CiLight } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { AccountNavigation } from '@/components/AccountNavigation';

type Task = {
  id: string;
  tasks: string;
};

export default function Page() {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [accountNavigation , setaccountNavigation ] = useState(false);

  useEffect(() => {
    const handleDisplay = async () => {
      setLoading(true);
      try {
        const response = await axios.get<{ data: Task[] }>('http://localhost:3000/api/lists');
        setData(response.data.data);
        console.log('Fetched data:', response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    handleDisplay();
  }, []);

  const handleTaskAdded = (newTask: Task) => {
    setData(prevData => [...prevData, newTask]);
  };

  const handleTaskDeleted = (id: string) => {
    setData(prevData => prevData.filter(task => task.id !== id));
  };

  const handleTaskUpdated = (id: string, newTask: string) => {
    setData(prevData => prevData.map(task => (task.id === id ? { ...task, tasks: newTask } : task)));
  };
  const toggleMode = () => {
    setDarkMode((mode) => !mode)
  }
  const handleAccountNavigation = () => {
    setaccountNavigation((nav) => !nav);
  }


  return (
    <div className={darkMode ? 'bg-black' : 'bg-slate-50'}>
      <div className="flex items-center justify-end p-4">
        <CiLight className={`text-4xl font-bold text-blue-500  transition-transform transform hover:scale-125 cursor-pointer ${darkMode ? 'text-white' : 'text-blue-500'}`} onClick={toggleMode} />
        <VscAccount
        className={`text-3xl font-bold text-blue-500 mx-5 cursor-pointer hover:scale-125 transition-transform transform ${darkMode ? 'text-white' : 'text-blue-500'}`} onClick={handleAccountNavigation}
      />
      </div>
      {accountNavigation && <AccountNavigation darkMode={darkMode}/>}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className={`text-center pb-5 font-semibold text-lg ${darkMode ? 'text-white' : 'text-black'}`}>Todo List App</h1>
          <InputWithButton onTaskAdded={handleTaskAdded} darkMode={darkMode}/>
          {loading ? <p>Loading...</p> : <TodoList items={data} onTaskDeleted={handleTaskDeleted} onTaskUpdated={handleTaskUpdated} darkMode={darkMode} />}
        </div>
      </main>
    </div>
  );
}
