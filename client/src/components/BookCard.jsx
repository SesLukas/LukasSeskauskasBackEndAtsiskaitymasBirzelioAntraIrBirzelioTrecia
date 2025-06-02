import { Link } from 'react-router';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { _id, title, description, author, genres, publishDate, rating } = book;

  const shortDescription = description.length > 120
    ? description.slice(0, 120) + '...'
    : description;

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Autorius:</strong> {author}</p>
      <p><strong>Žanrai:</strong> {genres.join(', ')}</p>
      <p><strong>Leidimo data:</strong> {new Date(publishDate).toLocaleDateString()}</p>
      <p><strong>Reitingas:</strong> {rating}/5</p>
      <p className="description">{shortDescription}</p>
      <Link to={`/books/${_id}`} target="_blank" rel="noopener noreferrer">
        <button>Skaityti plačiau</button>
      </Link>
    </div>
  );
};

export default BookCard;

