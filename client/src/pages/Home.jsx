import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <h1>Sveiki atvykę į Bibliotekos apžvalgų svetainę!</h1>
      <p>Čia rasite knygų apžvalgas, reitingus, žanrus, leidimo datas bei daugiau informacijos apie kiekvieną leidinį.</p>
      <p>Spauskite nuorodą "Mūsų knygos" viršuje dešinėje, kad peržiūrėtumėte visas knygas.</p>

      <img
        src="https://moviequotes.eu/upload/knygu-skaitymas.jpg"
        alt="Knygų skaitymas"
        className="home-image"
      />
    </section>
  );
};

export default Home;
