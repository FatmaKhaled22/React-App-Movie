import React from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import "./movies.css";

function Movies({ movie }) {


  const url_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <>
      <div className="col m-2" key={movie.id}>
        <div className="card">
          <img src={url_img} className="card-img-top" alt="movie-img" />
          <div className="card-body my-2">
            <h6 className="card-title">
              <Link to={`/details/${movie.id}`}>{movie.title}</Link>
            </h6>
            <p className="card-text mb-2">{movie.release_date}</p>
            <div className="container-rating">
              <div className="rating position-relative">
                <span className="rate position-absolute top-50 start-50 translate-middle">{movie.vote_average * 10}%</span>
                <CircularProgress variant="determinate" value={movie.vote_average * 10} className="progres"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
