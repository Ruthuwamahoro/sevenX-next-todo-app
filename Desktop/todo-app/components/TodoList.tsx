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
  darkMode: boolean
}

export function TodoList({ items, onTaskDeleted, onTaskUpdated, darkMode }: TodoListProps) {
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
        await axios.delete(`http://localhost:3000/api/lists/${itemToDelete}`);
        console.log('Item successfully deleted');
        onTaskDeleted(itemToDelete); // Call the callback function
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
        await axios.patch(`http://localhost:3000/api/lists/${editingItemId}`, { tasks: newTask });
        console.log('Item successfully updated');
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
    <div className={`w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg pt-5 ${darkMode ? 'bg-slate-700 text-white' : ''}`}>
      {showAlert && itemToDelete && (
        <Alert
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      <div className="max-h-80 overflow-auto">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">No items in the list</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3 mb-2 bg-gray-100 rounded-lg shadow-sm ${ darkMode ? 'bg-slate-500 text-white' : ''}`}
            >
              {editingItemId === item.id ? (
                <>
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="border p-2 flex-grow mr-2"
                  />
                  <Button onClick={handleUpdate} className="bg-green-500 text-white">Save</Button>
                </>
              ) : (
                <>
                  <p className={`text-gray-800 ${darkMode ? 'text-white' : ''}`}>{item.tasks}</p>
                  <div className="flex space-x-2">
                    <Button onClick={() => handleEdit(item.id, item.tasks)} className="bg-purple-500 text-white">Edit</Button>
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
