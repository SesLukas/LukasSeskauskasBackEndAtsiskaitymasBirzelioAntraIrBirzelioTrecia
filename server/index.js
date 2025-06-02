import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnect } from './db/connect.js';
import booksRoutes from './routes/books.js';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());


app.use(async (req, res, next) => {
  try {
    req.db = await dbConnect();
    next();
  } catch (err) {
    console.error('DB connection error:', err);
    res.status(500).json({ message: 'Database connection failed' });
  }
});

app.use('/api/books', booksRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
