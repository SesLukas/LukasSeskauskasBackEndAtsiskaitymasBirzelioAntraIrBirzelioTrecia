import express from 'express';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Gauti knygas su filtravimu ir rikiavimu
router.get('/', async (req, res) => {
  const { year_gte, year_lte, inStock, sort } = req.query;
  const query = {};

  if (year_gte || year_lte) {
    query.publishDate = {};
    if (year_gte) query.publishDate.$gte = new Date(`${year_gte}-01-01`);
    if (year_lte) query.publishDate.$lte = new Date(`${year_lte}-12-31`);
  }

  if (inStock === 'true') {
    query.amountOfCopies = { $gt: 0 };
  }

  const sortObj = {};
  if (sort === 'asc') sortObj.rating = 1;
  if (sort === 'desc') sortObj.rating = -1;

  const books = await req.db.collection('books').find(query).sort(sortObj).toArray();
  res.json(books);
});

// Gauti vieną knygą pagal ID
router.get('/:id', async (req, res) => {
  try {
    const book = await req.db.collection('books').findOne({ _id: new ObjectId(req.params.id) });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch {
    res.status(400).json({ message: 'Invalid ID format' });
  }
});

export default router;
