import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleMovie = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.imdbID === movieId);
  return (
    <div>
      <Link to={"/"}>
        <button>Back To Main</button>
      </Link>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
      </div>
    </div>
  );
};

export default SingleMovie;
