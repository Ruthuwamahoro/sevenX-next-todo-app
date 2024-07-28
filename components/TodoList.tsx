import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/alert';

interface TodoItem {
  id: string;
  tasks: string;
}

interface TodoListProps {
  items: TodoItem[];
  onTaskDeleted: (id: string) => void;
  onTaskUpdated: (id: string, newTask: string) => void;
}

export function TodoList({ items = [], onTaskDeleted, onTaskUpdated }: TodoListProps) {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(items);
  const [showAlert, setShowAlert] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [newTask, setNewTask] = useState('');
  useState(() => {
    setTodoItems(items);
  }, );

  const handleDelete = (id: string) => {
    setItemToDelete(id);
    setShowAlert(true);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        await axios.delete(`/api/lists/${itemToDelete}`);
        console.log('Item successfully deleted');
        setTodoItems((prevItems) => prevItems.filter((item) => item.id !== itemToDelete));
        onTaskDeleted(itemToDelete);
      } catch (error) {
        console.error('Error deleting item:', error);
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
        await axios.patch(`/api/lists/${editingItemId}`, { tasks: newTask });
        console.log('Item successfully updated');
        setTodoItems((prevItems) =>
          prevItems.map((item) =>
            item.id === editingItemId ? { ...item, tasks: newTask } : item
          )
        );
        onTaskUpdated(editingItemId, newTask);
      } catch (error) {
        console.error('Error updating item:', error);
      } finally {
        setEditingItemId(null);
        setNewTask('');
      }
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 shadow-md rounded-lg pt-5">
      {showAlert && itemToDelete && (
        <Alert onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
      <div className="max-h-80 overflow-auto">
        {todoItems.length === 0 ? (
          <p className="text-center">No items in the list</p>
        ) : (
          todoItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-5 mb-2 rounded-lg shadow-lg bg-opacity-100"
            >
              {editingItemId === item.id ? (
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
                  <p className={`${item.tasks.length > 5 ? 'whitespace-nowrap': ''}`}>{item.tasks}</p>
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
