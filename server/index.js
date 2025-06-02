import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import booksRoutes from './routes/books.js';

dotenv.config();

const app = express();

// Nustatomas CORS leidimas tik tavo fronto portui
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());

// Maršrutai
app.use('/api/books', booksRoutes);

// Paleidžiam serverį
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(` Serveris veikia: http://localhost:${PORT}`);
});
