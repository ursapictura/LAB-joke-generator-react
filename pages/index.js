import GetAJoke from '../components/GetAJoke';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Want to hear a joke?</h1>
      <GetAJoke />
    </div>
  );
}

export default Home;
