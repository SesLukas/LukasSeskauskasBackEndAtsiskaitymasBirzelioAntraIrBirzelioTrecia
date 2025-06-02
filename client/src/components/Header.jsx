import { Link, useLocation } from 'react-router';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="logo">📚 Biblioteka</div>
      <nav className="nav">
        <Link className={pathname === '/' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
        <Link className={pathname.startsWith('/books') ? 'nav-link active' : 'nav-link'} to="/books">All Books</Link>
      </nav>
    </header>
  );
};

export default Header;