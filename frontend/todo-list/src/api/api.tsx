import axios from 'axios';

const API_URL = 'http://localhost:9000/todos';

export const getTodos = () => axios.get(API_URL);

export const addTodo = (todo: ITodo) => axios.post(API_URL, todo);

export const updateTodo = (todo: ITodo) => axios.put(`${API_URL}/${todo._id}`, todo);

export const deleteTodo = (id: string) => axios.delete(`${API_URL}/${id}`);
