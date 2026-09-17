import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const API_URL = "https://api.tvmaze.com";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      setLoading(true);
      setError("");

      try {
        const trimmedSearch = search.trim();

        const endpoint = trimmedSearch
          ? `${API_URL}/search/shows?q=${encodeURIComponent(trimmedSearch)}`
          : `${API_URL}/shows`;

        const response = await fetch(endpoint, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load shows.");
        }

        const data = await response.json();

        const shows = trimmedSearch ? data.map((item) => item.show) : data;

        setMovies(shows);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            err.message ||
              "Something went wrong while loading the shows/movies.",
          );
          setMovies([]);
        }
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(fetchMovies, 350);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  return (
    <div className="app">
      <Navbar />

      <main className="movies-page">
        <div className="container">
          <header className="movies-header">
            <div>
              <span className="section-label">Shows and Movies Library</span>

              <h1>Explore Shows and Movies</h1>

              <p>
                Search through the collection and discover any show or movie.
              </p>
            </div>
          </header>

          <SearchBar value={search} onChange={setSearch} />

          {loading && (
            <div className="status-container">
              <div className="spinner"></div>
              <p>Loading shows/movies...</p>
            </div>
          )}

          {!loading && error && (
            <div className="status-container error-state">
              <div className="status-icon">!</div>
              <h2>Unable to load shows/movies</h2>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && movies.length === 0 && (
            <div className="status-container">
              <div className="status-icon">⌕</div>
              <h2>No shows/movies found</h2>
              <p>Try searching with another title or clear the search box.</p>
            </div>
          )}

          {!loading && !error && movies.length > 0 && (
            <>
              <div className="results-info">
                <span>
                  {search
                    ? `Search results for "${search}"`
                    : "Popular shows/movies"}
                </span>

                <span>{movies.length} results</span>
              </div>

              <section className="movie-grid">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDetails={setSelectedMovie}
                  />
                ))}
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default Movies;
