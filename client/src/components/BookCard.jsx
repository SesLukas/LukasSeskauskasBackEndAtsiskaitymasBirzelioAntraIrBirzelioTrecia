import { Link } from 'react-router';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { _id, title, description, author, genres, publishDate, rating } = book;
const getShortDescription = (text) => {
  const words = text.split(' ');
  if (words.length <= 15) return text;
  return words.slice(0, 15).join(' ') + '...';
};

const shortDescription = getShortDescription(description);

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Autorius:</strong> {author}</p>
      <p><strong>Žanrai (anglų kalba, pagal anglišką klasifikaciją):</strong> {genres.join(', ')}</p>
      <p><strong>Leidimo data:</strong> {new Date(publishDate).toLocaleDateString()}</p>
      <p><strong>Reitingas:</strong> {rating}/5</p>
      <p className="description">
  <strong>Aprašymas anglų kalba:</strong> {shortDescription}
</p>
      <Link to={`/books/${_id}`} target="_blank" rel="noopener noreferrer">
        <button>Skaityti plačiau</button>
      </Link>
    </div>
  );
};

export default BookCard;

