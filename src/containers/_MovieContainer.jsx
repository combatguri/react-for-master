import React, { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

function MovieContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const res = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? <h1>loading</h1> : null}
      <div>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default MovieContainer;
