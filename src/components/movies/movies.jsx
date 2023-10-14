import React from "react";
import Movie from "../movie-list/movie";
import { useSelector } from "react-redux";
import "../movie-list/movies.css";


function Movies() {

  const movies = useSelector((state) => state.movies.popular.results);
  console.log("Movies ---->", movies);

  return (
    <>
      <div className="container movies">
        <div className="sec-select my-5 d-flex justify-content-between">
            <h3>Explore Movies</h3>
            <select className="form-select" aria-label="Default select example">
                <option defaultValue>Sort By</option>
                <option value="1">Ascending (A - Z)</option>
                <option value="2">Descending (Z - A)</option>
            </select>
        </div>
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mb-5">
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
