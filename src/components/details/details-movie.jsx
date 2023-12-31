import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/instance";
import { CircularProgress } from "@mui/material";
import Cast from "./cast";
import Movie from "../movie-list/movie";
import "./details.css";


function Details_Movie() {

  const { id } = useParams();
  console.log("id from Movie :  --->", id);

  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [recommend, setRecommend] = useState([]);

  const getMovie = () =>{
    axiosInstance.get(`/movie/${id}`).then((res) => {
      console.log("details of movie", res.data);
      setMovie(res.data);
    }).catch((err) => {
      console.log("error ---->", err);
    });
  }

  const getCast = () =>{
    axiosInstance.get(`/movie/${id}/credits`).then((res) => {
      console.log("cast of movie", res.data);
      setCast(res.data.cast);
    }).catch((err) => {
      console.log("error ---->", err);
    });
  }

  const getRecommend = () =>{
    axiosInstance.get(`/movie/${id}/recommendations`).then((res) => {
      console.log("recommend of movie", res.data);
      setRecommend(res.data.results);
    }).catch((err) => {
      console.log("error ---->", err);
    });
  }

  useEffect(() => {
    getMovie();
    getCast();
    getRecommend();
  }, [id]);

  const url_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const url_cover = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  let img = movie.poster_path !== null ;

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}m`;
  }

  function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    // Split the formatted date into day, month, and year parts
    const [month, day, year] = formattedDate.split(' ');
    const capitalizedMonth = month;
    return `${capitalizedMonth} ${day} ${year}`;
  }

  function formatDateYear(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.split(' ');
    return `(${year})`;
  }

  const formatMoney = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
  }).format(value);

  return (
    <>
    <section>
      <div className="container-fluid details px-0" style={{background:`url(${url_cover}) center/ cover no-repeat`}}>
        <div className="over-lay">
        <div className="row m-5 cont" key={movie.id}>
          <div className="col-md-4 container-cover mb-5">
            <h1 className="name1 my-4">{movie.title} {formatDateYear(movie.release_date)}</h1>
            <img className="card-img-top rounded" src={img ? url_img : `/assets/img/no-cover.png`} alt="Movie Poster"/>
          </div>
          <div className="col-md-8">
            <h1 className="name2">{movie.title} {formatDateYear(movie.release_date)}</h1>
            {/* <ul className="mb-3 genres">
              {movie.genres.map((g)=>{
                return(
                  <li className="m-1 rounded">{g.name}</li>
                );
              })}
            </ul> */}
            <ul className="mb-3 genres">
              <li className="m-1 rounded"><i className="bi bi-star-fill"></i>  {movie.vote_average}</li>
              <li className="m-1 rounded"><i className="bi bi-hand-thumbs-up-fill"></i>  {movie.vote_count}</li>
              <li className="m-1 rounded"><i className="bi bi-calendar-fill"></i>  {formatDate(movie.release_date)}</li>
            </ul>
            <div className="container-rating my-4">
              <div className="rating position-relative">
                <span className="rate position-absolute top-50 start-50 translate-middle">
                  {Math.round(movie.vote_average * 10)}%
                </span>
                <CircularProgress variant="determinate" value={movie.vote_average * 10} className="progres"/>
              </div>
            </div>
            <h3 className="mb-3">Overview</h3>
            <p className="mb-5">{movie.overview}</p>
            <ul className="info">
              <li>Status : <span id="info">{movie.status}</span></li>
              <li>Release Date : <span id="info">{formatDate(movie.release_date)}</span></li>
              <li>Runtime : <span id="info">{timeConvert(movie.runtime)}</span></li>
            </ul><hr/>
            <p className="my-3"><i className="bi bi-badge-ad-fill"></i> Tagline : <span id="info">{movie.tagline}</span></p>
            <p className="my-3"><i className="bi bi-coin"></i> Budget : <span id="info">{formatMoney(movie.budget)}</span></p> 
            
          </div>
         
        </div>
        <div className="opacity"></div>
        </div>
      </div>
    </section>

    <div className="container cast">
      <h1 className="mb-4">Top Cast</h1>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
        {cast.slice(0, 6).map((cast) => {
          return (
            <Cast cast={cast} key={cast.id}/>
          )
        })}
      </div>
    </div>

    <div className="container movies my-5 recommend">
      <h3 className="mb-4">Recommendations</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {recommend.length == 0 ? <h4 className="my-5" style={{textAlign:'center',width:'100%'}}>Not any Recommended yet</h4> : recommend.slice(0,5).map((movie)=>{
          return(
            <Movie movie={movie} key={movie.id}/>
          )
        })}
      </div>
    </div>

    </>
  );
}

export default Details_Movie;
