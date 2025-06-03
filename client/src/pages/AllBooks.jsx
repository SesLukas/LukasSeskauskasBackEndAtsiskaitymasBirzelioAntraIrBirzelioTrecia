import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import FilterForm from '../components/FilterForm';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5500/api/books${queryString}`)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Klaida gaunant knygas:', err));
  }, [queryString]);

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Knygų paieškos katalogas</h2>
      <h3>Galima ieškoti pagal knygos leidimo metus, reitingą ir pagal tai, ar yra knygos egzempliorių bibliotekoje. </h3>
      <FilterForm setQueryString={setQueryString} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {books.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
