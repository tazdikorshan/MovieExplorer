const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/800x500?text=No+Image";

  const rating = movie.rating?.average
    ? movie.rating.average.toFixed(1)
    : "N/A";

  const releaseDate = movie.premiered
    ? new Date(movie.premiered).toLocaleDateString()
    : "Unknown";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No summary available.";

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="modal" role="dialog" aria-modal="true">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          x
        </button>

        <div className="modal-image-container">
          <img
            src={image}
            alt={`${movie.name} poster`}
            className="modal-image"
          />
        </div>

        <div className="modal-content">
          <p className="modal-label">Details</p>

          <h2>{movie.name}</h2>

          <div className="modal-meta">
            <span>★ {rating}</span>
            <span>🗓️ {releaseDate}</span>
          </div>

          {movie.genres?.length > 0 && (
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
          )}

          <h3>Overview</h3>

          <p className="modal-summary">{summary}</p>

          <div className="additional-info">
            {movie.language && (
              <div>
                <strong>Language</strong>
                <span>{movie.language}</span>
              </div>
            )}

            {movie.status && (
              <div>
                <strong>Status</strong>
                <span>{movie.status}</span>
              </div>
            )}

            {movie.runtime && (
              <div>
                <strong>Runtime</strong>
                <span>{movie.runtime} minutes</span>
              </div>
            )}
          </div>

          <button
            type="button"
            className="close-modal-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
