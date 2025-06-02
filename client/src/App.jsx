import { Outlet } from 'react-router';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
