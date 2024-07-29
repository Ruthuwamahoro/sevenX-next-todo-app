import axios from 'axios';
import {useQuery, useMutation} from '@tanstack/react-query'

export const deleteTask = async (id: string) => {
  try {
    await axios.delete(`/api/lists/${id}`);
  } catch (error) {
    return error
  }
};

export const updateTask = async (id: string, newTask: string) => {
  try {
    await axios.patch(`/api/lists/${id}`, { tasks: newTask });
  } catch (error) {
    return error
  }
};
