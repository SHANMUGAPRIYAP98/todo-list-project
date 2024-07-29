import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

const userSchema: Schema = new Schema({

    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  userSchema.pre<IUser>('save', function(next) {
    this.created_at = new Date();
    this.updated_at = new Date();
    next();
  });
  
  const User = mongoose.model<IUser>('User', userSchema);

  export default User;