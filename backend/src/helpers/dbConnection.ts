import mongoose from "mongoose";

const mongoDBConnectionStr = process.env.MONGO_DB_CONN_STR;

export default function dbConnection() {
    mongoose.connect(mongoDBConnectionStr!)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });
}

