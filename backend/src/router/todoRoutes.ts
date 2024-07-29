import { Router } from "express";
import {
  createTodo,
  getTodoById,
  listTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todoController";

const todoRouter = Router();

todoRouter.post("/", createTodo);
todoRouter.get("/", listTodo);
todoRouter.get("/:id", getTodoById);
todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;
