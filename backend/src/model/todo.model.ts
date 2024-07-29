import mongoose, { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  task_name: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  due_date: Date
  created_at: Date;
  updated_at: Date;
}

const todoSchema: Schema = new Schema({
    task_name: { type: String, required: true },
    status: { type: String, required: true, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    priority: { type: String, required: true, enum: ['low', 'medium', 'high'], default: 'low' },
    due_date: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  todoSchema.pre<ITodo>('save', function(next) {
    this.created_at = new Date();
    this.updated_at = new Date();
    next();
  });
  
  const Todo = mongoose.model<ITodo>('Todo', todoSchema);

  export default Todo;