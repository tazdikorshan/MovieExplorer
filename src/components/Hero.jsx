import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">
          <span className="hero-label">Welcome to Movie Explorer</span>
          <h1>
            Discover your next
            <span>favourite Movie or Show.</span>
          </h1>

          <p>
            Explore thousands of Movies/Shows, discover new stories and find
            something worth watching
          </p>

          <Link to="/movies" className="hero-button">
            Exlpore Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
