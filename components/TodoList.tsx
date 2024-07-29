import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/Alert';
import { deleteTask, updateTask } from '@/utils/controller';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export interface TodoItem {
  id: string;
  tasks: string;
}

interface TodoProps {
  items: TodoItem[] | null;
}

export function TodoList({ items = []}: TodoProps) {
  const [showAlert, setShowAlert] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    tasks:"",
  });
    const queryClient = useQueryClient();

  const handleDelete = (id: string) => {
    setItemToDelete(id);
    setShowAlert(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
        deleteMutation.mutate(itemToDelete);
    }
  };

  const deleteMutation = useMutation({
    mutationFn:deleteTask,
    onSuccess: () => {
       queryClient.invalidateQueries({queryKey: ['todos']});
       setShowAlert(false)
    }
  })

  const cancelDelete = () => {
    setShowAlert(false);
    setItemToDelete(null);
  };

  const handleEdit = (id: string, currentTask: string) => {
    setEditingItemId(id);
    setFormData({tasks:currentTask});
  };
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const updateMutation = useMutation({
    mutationFn:updateTask,
    onSuccess: () => {
       queryClient.invalidateQueries({queryKey: ['todos']});
       setEditingItemId(null);
    }
  })
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
                    name='tasks'
                    value={formData.tasks}
                    onChange={handleChange}
                    className="border p-2 flex-grow mr-2"
                  />
                  <Button 
                  onClick={() =>updateMutation.mutate({id:editingItemId,newData:formData})}
                  >Save</Button>
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