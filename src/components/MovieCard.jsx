const MovieCard = ({ movie, onSeeDetails }) => {
  const poster =
    movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
  const rating = movie.rating?.average || "N/A";
  const year = movie.premiered ? movie.premiered.substring(0, 4) : "N/A";

  return (
    <div className="movie-card">
      <img src="{poster}" alt="{movie.name}" />
      <div className="card-content">
        <h3>{movie.name}</h3>
        <p>
          ⭐ {rating} . 🗓️ {year}
        </p>
        <button className="details-btn" onClick={() => onSeeDetails(movie)}>
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
