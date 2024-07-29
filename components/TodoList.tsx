import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/Alert';
import { deleteTask } from '@/utils/controller';


export interface TodoItem {
  id: string;
  tasks: string;
}

interface TodoProps {
  items: TodoItem[] | null;
  DeleteTask: (id: string) => void;
  updateTask: (id: string, newTask: string) => void;
}

export function TodoList({ items = [], DeleteTask, updateTask }: TodoProps) {
  const [showAlert, setShowAlert] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [newTask, setNewTask] = useState('');

  const handleDelete = (id: string) => {
    setItemToDelete(id);
    setShowAlert(true);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        await deleteTask(itemToDelete);
        DeleteTask(itemToDelete);
      } catch (error) {
        console.error(error);
      } finally {
        setShowAlert(false);
        setItemToDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setShowAlert(false);
    setItemToDelete(null);
  };

  const handleEdit = (id: string, currentTask: string) => {
    setEditingItemId(id);
    setNewTask(currentTask);
  };

  const handleUpdate = async () => {
    if (editingItemId && newTask.trim() !== '') {
      try {
        await updateTask(editingItemId, newTask);
        updateTask(editingItemId, newTask);
      } catch (error) {
        console.error(error);
      } finally {
        setEditingItemId(null);
        setNewTask('');
      }
    }
  };


  return (
    <div className="w-full max-w-lg mx-auto p-4 shadow-md rounded-lg pt-5">
      {showAlert && itemToDelete && (
        <Alert Confirm={confirmDelete} Cancel={cancelDelete} />
      )}
      <div className="max-h-80 overflow-auto">
        {items?.length === 0 ? (
          <p className="text-center">No items in the list</p>
        ) : (
          items?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-5 mb-2 rounded-lg shadow-lg bg-opacity-100"
            >
              {editingItemId === item?.id ? (
                <>
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="border p-2 flex-grow mr-2"
                  />
                  <Button onClick={handleUpdate}>Save</Button>
                </>
              ) : (
                <>
                  <p>{item.tasks}</p>
                  <div className="flex space-x-2">
                    <Button onClick={() => handleEdit(item.id, item.tasks)}>Edit</Button>
                    <Button onClick={() => handleDelete(item.id)} className="border-b-indigo-300">Delete</Button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}