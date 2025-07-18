import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Biblioteka. All rights reserved.</p>
      <div className="footer-info">
        <div>
          <strong>Darbo laikas:</strong><br />
          I–V: 9:00–18:00<br />
          VI: 10:00–14:00<br />
          VII: nedirbame
        </div>
        <div>
          <strong>Adresas:</strong><br />
          Gedimino pr. 1, Vilnius<br />
          <strong>Socialiniai tinklai:</strong><br />
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>{' '}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>{' '}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>{' '}
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

