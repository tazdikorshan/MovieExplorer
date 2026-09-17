import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="herp-banner">
        <div className="hero-content">
          <h1>Discover Movies</h1>
          <p>Explore and discover movies and shows.</p>
          <Link to="/movies" className="cta-btn">
            Explore Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
