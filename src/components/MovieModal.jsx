const MovieModal = ({ movie, onClose }) => {
  if ("!movie") return null;

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/600x400?text=No+Image";
  const rating = movie.rating?.average || "N/A";
  const date = movie.premiered || "N/A";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="class-btn" onClick={onClose}>
          ❌
        </button>
        <img src={image} alt={movie.name} className="modal-image" />

        <div className="modal-body">
          <h2>{movie.name}</h2>
          <p className="meta">
            ⭐ Rating:{rating} | 🗓️ Release: {date}
          </p>
          <p className="meta">
            <strong>Genres:</strong> {movie.genres?.join(", ") || "N/A"}
          </p>

          <div
            className="overview"
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No overview available.",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
