import React from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import './movies.css';

function Movies() {

  const movies = useSelector((state) => state.movies.results);
  console.log("Movies ---->" , movies);


  return (
    <>
    <div className="body">
      <div className="container movies">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 p-3">
            {movies.map((movie)=>{
                const url_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                return(
                    <div className="col my-3" key={movie.id}>
                        <div className="card">
                            <img src={url_img} className="card-img-top" alt="movie-img" />
                            <div className="card-body my-2">
                                <h6 className="card-title">{movie.title}</h6>
                                <p className="card-text mb-2">{movie.release_date}</p>
                                <div className="container-rating">
                                    <div className="rating position-relative">
                                        <span className="rate position-absolute top-50 start-50 translate-middle">{(movie.vote_average)*10}%</span>
                                        <CircularProgress variant="determinate" value={(movie.vote_average)*10} className="progres"/>
                                    </div>
                                </div>
                             
                            </div>

                            
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
    </>
  );
}

export default Movies;
