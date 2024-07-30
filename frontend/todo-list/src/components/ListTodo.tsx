import React, { useState } from 'react';

interface Props {
  todo: ITodo;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
}

const ListTodo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(todo.task_name);
  const [dueDate, setDueDate] = useState(todo.due_date);
  const [priority, setPriority] = useState(todo.priority);
  const [status, setStatus] = useState(todo.status);

  // Handler for status change in the select dropdown
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'pending' | 'in-progress' | 'completed';
    setStatus(value);
  };

  // Handler for checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setStatus(isChecked ? 'completed' : 'pending');
  };

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Submit updated todo
  const handleUpdateClick = () => {
    const updatedTodo: ITodo = {
      ...todo,
      task_name: taskName,
      due_date: dueDate,
      priority,
      status
    };
    updateTodo(updatedTodo);
    setIsEditing(false);
  };

  return (
    <div className="Card">
      <div className="Card--text">
        {isEditing ? (
          <div className="Card--edit-form">
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Task Name"
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <select value={status} onChange={handleStatusChange}>
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={handleUpdateClick}>Save</button>
          </div>
        ) : (
          <>
            <h1 className={status === 'completed' ? 'completed' : ''}>{taskName}</h1>
            <span>{dueDate}</span>
            <span>{priority}</span>
          </>
        )}
      </div>
      <div className="Card--button">
        <div className="Card--checkbox">
          <input
            type="checkbox"
            checked={status === 'completed'}
            onChange={handleCheckboxChange}
          />
        </div>
        <button onClick={handleEditClick} className="Card--button__done">
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={() => deleteTodo(todo._id)} className="Card--button__delete">Delete</button>
      </div>
    </div>
  );
};

export default ListTodo;
