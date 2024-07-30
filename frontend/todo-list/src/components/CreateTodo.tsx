import React, { useState } from 'react';
import '../styles/CreateTodo.css'; 

interface CreateTodoProps {
  saveTodo: (e: React.FormEvent, formData: ITodo) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo>({
    _id: '',
    task_name: '',
    due_date: '',
    priority: 'low',
    status: 'pending',
    created_at: '',
    updated_at: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveTodo(e, { ...formData, created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <input type="text" name="task_name" placeholder="Task Name" value={formData.task_name} onChange={handleChange} required />
      <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} required />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In-Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
