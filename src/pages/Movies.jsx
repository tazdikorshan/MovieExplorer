import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchInitialShows();
  }, []);

  const fetchInitialShows = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setMovies(data.slice(0, 50));
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      fetchInitialShows();
      return;
    }
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
      );
      const data = await response.json();
      setMovies(data.map((item) => item.show));
    } catch (error) {
      console.error("Error searching shows:", error);
    }
  };

  return (
    <div className="movies-page">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSeeDetails={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;
