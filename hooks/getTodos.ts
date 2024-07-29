import {useQuery } from '@tanstack/react-query';
import {fetchTodoList } from '@/utils/controller';

export const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  });
};
