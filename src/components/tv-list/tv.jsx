import React from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import '../movie-list/movies.css';

function Tv({ tv }) {


  const url_img = `https://image.tmdb.org/t/p/w500/${tv.poster_path}`;
  let img = tv.poster_path !== null ;

  return (
    <>
      <div className="col" key={tv.id}>
        <div className="card">
          <img src={img ? url_img : `/assets/img/no-cover.png`} className="card-img-top" alt="tv-img" />
          <div className="card-body my-2">
            <h6 className="card-title mt-1">
              <Link to={`/tv/details/${tv.id}`}>{tv.name}</Link>
            </h6>
            <p className="card-text mb-2">{tv.first_air_date}</p>
            <div className="container-rating">
              <div className="rating position-relative">
                <span className="rate position-absolute top-50 start-50 translate-middle">{Math.round(tv.vote_average * 10)}%</span>
                <CircularProgress variant="determinate" value={tv.vote_average * 10} className="progres"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tv;