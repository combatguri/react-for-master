import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PageMovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovieDetail = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? <h1>loading</h1> : null}
      <h2>{movie.title}</h2>
    </div>
  );
}

export default PageMovieDetail;
