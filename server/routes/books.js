import express from 'express';

const router = express.Router();

// Gauti visas knygas su filtravimu ir rikiavimu
router.get('/', async (req, res) => {
  const { year_gte, year_lte, inStock, sort, publishDate } = req.query;
  const query = {};

  // 1. Filtravimas pagal leidimo metus kaip string (jei publishDate saugoma kaip tekstas "2023-05-09")
  if (year_gte || year_lte) {
    query.publishDate = {};
    if (year_gte) query.publishDate.$gte = `${year_gte}-01-01`;
    if (year_lte) query.publishDate.$lte = `${year_lte}-12-31`;
  }

  // 2. Filtravimas pagal tikslią datą
  if (publishDate) {
    query.publishDate = publishDate; // string palyginimas, pvz. "2023-05-09"
  }

  // 3. Ar turi kopijų
  if (inStock === 'true') {
    query.amountOfCopies = { $gt: 0 };
  }

  // 4. Rikiavimas
  const sortObj = {};
  if (sort === 'asc') sortObj.rating = 1;
  if (sort === 'desc') sortObj.rating = -1;

  const knygos = await req.db.collection('knygos').find(query).sort(sortObj).toArray();
  res.json(knygos);
});

// Gauti vieną knygą pagal ID (UUID string)
router.get('/:id', async (req, res) => {
  try {
    const knyga = await req.db.collection('knygos').findOne({ _id: req.params.id });
    if (!knyga) return res.status(404).json({ message: 'Knyga nerasta' });
    res.json(knyga);
  } catch {
    res.status(400).json({ message: 'Neteisingas ID formatas' });
  }
});

export default router;
