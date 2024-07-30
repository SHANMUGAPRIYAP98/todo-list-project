interface ITodo {
  _id: string;
  task_name: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  due_date: string;
  created_at: string;
  updated_at: string;
}

type ApiDataType = {
  message: string;
  data: any;
};

type TodoProps = {
  todo: ITodo;
};
