'use client';

import { InputWithButton } from '@/components/ui/InputWithButton';
import { TodoList } from '@/components/TodoList';
import { useGetTodos } from '@/hooks/getTodos';

export default function Page() {
  const { data, isLoading, error } = useGetTodos();

  return (
    <div>
      <main className="flex items-center justify-center p-24 min-h-screen">
        <div>
          <h1 className="text-center pb-5 font-semibold text-lg">Todo List App</h1>
          <div className='bg-white-50 p-5 rounded-lg shadow-inner overflow-y-auto'>
            <InputWithButton/>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading data</p>
            ) : (
              data && <TodoList items={data}/>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
