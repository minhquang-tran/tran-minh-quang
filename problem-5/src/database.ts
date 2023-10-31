// database.ts
import mongoose from 'mongoose';

const DB_URI = 'mongodb://localhost:27017/99tech';

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });