import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {  postTask } from '@/utils/controller';

export function InputWithButton() {
  const [formData, setFormData] = useState({
    tasks:"",
  });
  const queryClient = useQueryClient();


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const postMutation = useMutation({
    mutationFn:postTask,
    onSuccess: () => {
       queryClient.invalidateQueries({queryKey: ['todos']});

    }
  })

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 pb-5">
     <input
        type="text"
        name='tasks'
        value={formData.tasks}
        onChange={handleChange}
        className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter a task"
      />
      <Button type="submit" onClick={() =>
      {
        postMutation.mutate(formData)
      }
        
      }>
        {postMutation.isPending?"Adding..":"Add Task"}
        </Button>
    </div>
  )
}

