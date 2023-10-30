import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddFav, RemoveFav } from "../../store/reducer/fav";
import Swal from "sweetalert2";
import "./movies.css";

function Movie({ movie , isFav = false}) {

  const url_img = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  let img = movie.poster_path !== null ;

  /////////////////////////////////////////////////\
  ///Handling Favorites
  // const [isFav, setisFav] = useState("false");

  const FavMovies = useSelector((state) => state.favorite.favorites.map((f)=>{return f}));
  console.log(FavMovies);

  const dispatch = useDispatch();

  const handleAddFavorites = (movie) => {
    Swal.fire({
      title:`${movie.title}`,
      text:"Added to Favorite",
      icon:'success',
      showConfirmButton: false,
    })
    // isFav = true;
    // setisFav(!isFav);
    console.log('Received movie:', movie);
    dispatch(AddFav(movie));
  }


  const handleRemoveFavorites = (movie) => {
    FavMovies.map((f)=>{
      if(f.id === movie.id){
        Swal.fire({
          title:`${movie.title}`,
          text:"Removed to Favorite",
          icon:'warning',
          showConfirmButton: false,
        })
        // isFav = false;
        // setisFav(isFav);
        console.log('Removed movie:', movie);
        dispatch(RemoveFav(movie));
      }
    })
  }
  // useEffect(()=>{
  //   handleRemoveFavorites(movie)
  // },[])

  // const handleRemoveFavorites = (movie) => {
  //   Swal.fire({
  //     title:`${movie.title}`,
  //     text:"Removed to Favorite",
  //     icon:'warning',
  //     showConfirmButton: false,
  //   })
  //   isFav = false;
  //   // setisFav(isFav);
  //   console.log('Removed movie:', movie)
  //   dispatch(RemoveFav(movie))
  // }


  return (
    <>
      <div className="col" key={movie.id}>
        <div className="card">
          <img src={img ? url_img : `/assets/img/no-cover.png`} className="card-img-top" alt="movie-img" />
          <div className="card-body my-2">
            <div className="d-flex justify-content-between">
              <h6 className="card-title mt-1">
                <Link to={`/movie/details/${movie.id}`}>{movie.title}</Link>
              </h6>
              <i className={isFav ? "bi bi-heart-fill" : "bi bi-heart"} 
              onClick={() => movie.isFav
                ? handleRemoveFavorites(movie)
                : handleAddFavorites(movie)
              }
              ></i>
            </div>
            <p className="card-text mb-2">{movie.release_date}</p>
            <div className="container-rating">
              <div className="rating position-relative">
                <span className="rate position-absolute top-50 start-50 translate-middle">{Math.round(movie.vote_average * 10)}%</span>
                <CircularProgress variant="determinate" value={movie.vote_average * 10} className="progres"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
