const Home = () => {
  return (
    <section style={styles.container}>
      <h1>Sveiki atvykę į Bibliotekos apžvalgų svetainę!</h1>
      <p>Čia rasite knygų apžvalgas, reitingus, žanrus, leidimo datas bei daugiau informacijos apie kiekvieną leidinį.</p>
      <p>Spauskite nuorodą"Mūsų knygos" viršuje dešinėje, kad peržiūrėtumėte visas knygas.</p>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    lineHeight: '1.6',
  }
};

export default Home;
