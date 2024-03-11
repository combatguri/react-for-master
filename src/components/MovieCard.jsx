import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <>
      <h1>
        <Link to={`/movie/detail/${movie.id}`}>{movie.title}</Link>
      </h1>
      <img src={movie.medium_cover_image} alt="" />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g, gIds) => (
          <li key={gIds}>{g}</li>
        ))}
      </ul>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
