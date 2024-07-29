import axios from 'axios';
import { TodoItem } from '@/components/TodoList';

export const fetchTodoList = async (): Promise<TodoItem[]> => {
  try {
    const response = await axios.get<{ data: TodoItem[] }>('/api/lists');
    console.log('dataaaaNina', response.data.data)
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching todo list');
  }
};
interface NewTask {
  tasks: string
}
interface UpdateTask {
  id: string
  newData: {
    tasks: string
  }
}

export const postTask = async (newTask: NewTask) => {
  try {
    await axios.post('/api/lists', newTask);
  } catch (error) {
    throw new Error('Error posting new task');
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await axios.delete(`/api/lists/${id}`);
  } catch (error) {
    throw new Error('Error deleting task');
  }
};

export const updateTask = async ({id, newData}:UpdateTask): Promise<void> => {
  try {
    await axios.patch(`/api/lists/${id}`, newData);
  } catch (error) {
    throw new Error('Error updating task');
  }
};
