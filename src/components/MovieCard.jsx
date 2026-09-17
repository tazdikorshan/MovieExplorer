const MovieCard = ({ movie, onDetails }) => {
  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/400x600?text=No+Image";

  const rating = movie.rating?.average
    ? movie.rating.average.toFixed(1)
    : "N/A";

  const releaseDate = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "Unknown";

  return (
    <article className="movie-card">
      <div className="movie-image-wrapper">
        <img
          src={image}
          alt={`${movie.name} poster`}
          className="movie-image"
          loading="lazy"
        />

        <div className="movie-rating">⭐ {rating}</div>
      </div>

      <div className="movie-card-content">
        <h2 title={movie.name}>{movie.name}</h2>

        <div className="movie-meta">
          <span>🗓️ {releaseDate}</span>

          {movie.genres?.length > 0 && <span>{movie.genres[0]}</span>}
        </div>

        <button
          type="button"
          className="details-button"
          onClick={() => onDetails(movie)}
        >
          See Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
