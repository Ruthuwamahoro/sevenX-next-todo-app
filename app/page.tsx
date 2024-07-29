'use client';

import { InputWithButton } from '@/components/ui/InputWithButton';
import { TodoItem, TodoList } from '@/components/TodoList';
// import { postTask, deleteTask, updateTask } from '@/utils/controller';
import { useGetTodos } from '@/hooks/getTodos';
// import { useQueryClient } from '@tanstack/react-query';

export default function Page() {
  const { data, isLoading, error } = useGetTodos();
  // const queryClient = useQueryClient();

  // const handleTaskPost = async (newTask: TodoItem) => {
  //   try {
  //     await postTask(newTask);
  //     queryClient.invalidateQueries({ queryKey: ['todos'] });
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // const handleTaskDeleted = async (id: string) => {
  //   try {
  //     await deleteTask(id);
  //     queryClient.invalidateQueries({ queryKey: ['todos'] });
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // const handleTaskUpdated = async (id: string, newTask: string) => {
  //   try {
  //     await updateTask(id, newTask);
  //     queryClient.invalidateQueries({ queryKey: ['todos'] });
  //   } catch (error) {
  //     return error;
  //   }
  // };

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
