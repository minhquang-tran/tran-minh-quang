// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import resourceRoutes from './routes/resourceRoutes';
import './database'; // Import the database connection file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/resources', resourceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});