import {  Request, Response } from "express";
import Todo, { ITodo } from "../model/todo.model";
import moment from 'moment';
import mongoose from "mongoose";

export const createTodo = async (
 request: Request,
 response:    Response
): Promise<void> => {
  const { task_name, status, priority, due_date } =request.body;
  const formattedDueDate = moment(due_date, 'DD-MM-YYYY').toDate();
  try {

    const todo: ITodo = new Todo({ task_name, status, priority, due_date: formattedDueDate });
    await todo.save();
   response
      .status(200)
      .json({ message: "Todo List created successfully!!", data: todo });
  } catch (err: any) {
   response
      .status(500)
      .json({ message: "Failed to create Todo List", error: err.message });
  }
};

export const listTodo = async (
 request:Request,
 response:Response
): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
   response
      .status(200)
      .json({ message: "Todo List retrieved successfully!!", data: todos });
  } catch (err: any) {
   response
      .status(500)
      .json({ message: "Failed to retrieve Todo List", error: err.message });
  }
};

export const getTodoById = async (
  request: Request,
  response: Response
)=> {
  try {
    const { id } = request.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid Todo ID' });
    }
    const todo = await Todo.findById(id);
    if (todo) {
      response.status(200).json({message: 'Todo fetched successfully!', data: todo});
    } else {
      response.status(404).json({ message: "Todo not found" });
    }
  } catch (error: any) {
    response.status(500).json({ message: 'Failed to fetch Todo By Id', error: error.message });
  }
};

export const updateTodo = async (
  request:Request,
  response:Response
) => {
  try {
    const { id } = request.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid Todo ID' });
    }
    const todo = await Todo.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    if (todo) {
      response.status(200).json({message: 'Updated Todo Successfully!', data: todo});
    } else {
      response.status(404).json({ message: "Todo not found" });
    }
  } catch (error: any) {
    response.status(500).json({ message: 'Failed to update Todo', error: error.message });
  }
};

export const deleteTodo = async (
  request:Request,
  response:Response
) => {
  try {
    const { id } = request.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: 'Invalid Todo ID' });
    }
    const todo = await Todo.findByIdAndDelete(id);
    if (todo) {
      response.status(200).json({ message: "Deleted Todo Successfully!" });
    } else {
      response.status(404).json({ message: "Todo not found" });
    }
  } catch (error: any) {
    response.status(500).json({ message: 'Failed to delete Todo', error: error.message });
  }
};
