import mongoose, { Schema, Document } from 'mongoose';

export interface ISession extends Document {
  user_id: string;
  ip_address: string;
  login_time: Date;
  logout_time?: Date;
}

const sessionSchema: Schema = new Schema({
    user_id: { type: String, ref: 'User', required: true },
    ip_address: { type: String, required: true },
    login_time: { type: Date, default: Date.now, required: true },
    logout_time: { type: Date },
});

const Session = mongoose.model<ISession>('Session', sessionSchema);

export default Session;