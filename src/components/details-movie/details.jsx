import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/instance";
import "./details.css";
import { CircularProgress } from "@mui/material";

function Details() {
  const { id } = useParams();
  console.log("id from Movie :  --->", id);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}`)
      .then((res) => {
        console.log("details of movie", res.data);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log("error ---->", err);
      });
  }, []);

  const url_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const url_cover = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

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

  const formatMoney = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
  }).format(value);

  return (
    <>
    <div className="sec-details" style={{background:`url(${url_cover}) center/ cover no-repeat`}}>
      <div className="container details">
        <div className="row m-5 g-5" key={movie.id}>
          <div className="col-md-4 container-cover">
            <img
              className="card-img-top mb-md-0 rounded"
              src={url_img}
              alt="Movie Cover"
            />
          </div>
          <div className="col-md-8">
            <h1>{movie.title}</h1>
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
                <CircularProgress
                  variant="determinate"
                  value={movie.vote_average * 10}
                  className="progres"
                />
              </div>
            </div>
            <h3>Overview</h3>
            <p className="mb-5">{movie.overview}</p>
            <ul className="info">
              <li>
                Status : <span id="info">{movie.status}</span>
              </li>
              <li>
                Release Date : <span id="info">{formatDate(movie.release_date)}</span>
              </li>
              <li>Runtime : <span id="info">{timeConvert(movie.runtime)}</span>
              </li>
            </ul><hr/>
            <p className="my-3"><i className="bi bi-badge-ad-fill"></i> Tagline : <span id="info">{movie.tagline}</span></p>
            {/* <p className="my-2"><i className="bi bi-flag-fill"></i> Country : {movie.production_countries.map((c)=>{
              return(
                <span id="info">{c.name} , </span> 
              )
            })}</p> */}
            <p className="my-3"><i className="bi bi-coin"></i> Budget : <span id="info">{formatMoney(movie.budget)}</span></p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Details;