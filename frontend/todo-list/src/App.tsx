import React, { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
import { getTodos, addTodo, updateTodo, deleteTodo } from './api/api';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (): Promise<void> => {
    try {
      const result = await getTodos();
      setTodos(result.data.data);
    } catch (err) {
      console.error('Error fetching todos:', err);
    }
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        console.log(data);
        if (status === 201 && data.data) {
          setTodos((prevTodos) => [...prevTodos, ...data.data]);
        } else {
          throw new Error('Error! Todo not saved');
        }
      })
      .catch((err) => console.error('Error saving todo:', err));
  };

  const handleUpdateTodo = async (todo: ITodo): Promise<void> => {
    try {
      const { status, data } = await updateTodo(todo);
      if (status === 200) {
        setTodos((prevTodos) => prevTodos.map((t) => (t._id === todo._id ? data.data : t)));
      } else {
        throw new Error('Error! Todo not updated');
      }
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  const handleDeleteTodo = async (_id: string): Promise<void> => {
    try {
      const { status, data } = await deleteTodo(_id);
      if (status === 200) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== _id));
      } else {
        throw new Error('Error! Todo not deleted');
      }
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <main className="App">
      <h1>My Todos</h1>
      <CreateTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <ListTodo
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  );
};

export default App;
