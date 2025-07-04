import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5500/api/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Klaida gaunant knygą:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Kraunama...</p>;
  if (!book) return <p className="error">Knyga nerasta.</p>;

  return (
    <div className="book-details">
      <div className="book-content">
        <h1>{book.title}</h1>
        <p><strong>Autorius:</strong> {book.author}</p>
        <p>
          <strong>Žanrai (anglų kalba, pagal anglišką klasifikaciją):</strong>{' '}
          {book.genres.join(', ')}
        </p>
        <p>
          <strong>Leidimo data:</strong>{' '}
          {new Date(book.publishDate).toLocaleDateString()}
        </p>
        <p><strong>Reitingas:</strong> {book.rating}/5</p>
        <p><strong>Turimos kopijos:</strong> {book.amountOfCopies}</p>
        <p><strong>Aprašymas anglų kalba:</strong></p>
        <p>{book.description}</p>
      </div>

      <div className="book-image">
        <img
          src={
            book.imageUrl ||
            'https://via.placeholder.com/160x240?text=Nėra+paveikslėlio'
          }
          alt={
            book.imageUrl
              ? `Viršelis: ${book.title}`
              : 'Paveikslėlis nepateiktas'
          }
          className="book-cover"
        />
      </div>
    </div>
  );
};

export default BookDetails;


