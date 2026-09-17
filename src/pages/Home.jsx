import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <section className="home-info">
          <div className="container">
            <div className="section-heading">
              <span>Why Movie Explorer?</span>
              <h2>Find any stories of worth watching.</h2>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">🔎</div>
                <h3>Search</h3>
                <p>
                  Quickly search through shows and discover titles that match
                  what you're looking for.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">🎞️</div>
                <h3>Explore</h3>
                <p>
                  Browse a large collection of shows and discover something new
                  to watch.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Discover</h3>
                <p>
                  Check ratings, genres, release information, and summaries
                  before choosing your next show.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
