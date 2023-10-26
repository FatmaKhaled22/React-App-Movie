import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/instance";
import { CircularProgress } from "@mui/material";
import Cast from "./cast";
import Tv from "../tv-list/tv";
import "./details.css";

function Details_Tv() {

  const { id } = useParams();
  console.log("id from tv :  --->", id);

  const [tv, setTv] = useState([]);
  const [cast, setCast] = useState([]);
  const [recommend, setRecommend] = useState([]);

  const getMovie = () =>{
    axiosInstance.get(`/tv/${id}`).then((res) => {
      console.log("details of tv", res.data);
      setTv(res.data);
    }).catch((err) => {
      console.log("error ---->", err);
    });
  }

  const getCast = () =>{
    axiosInstance.get(`/tv/${id}/credits`).then((res) => {
      console.log("cast of tv", res.data);
      setCast(res.data.cast);
    }).catch((err) => {
      console.log("error ---->", err);
    });
  }

  const getRecommend = () =>{
    axiosInstance.get(`/tv/${id}/recommendations`).then((res) => {
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


  const url_img = `https://image.tmdb.org/t/p/w500/${tv.poster_path}`;
  const url_cover = `https://image.tmdb.org/t/p/original/${tv.backdrop_path}`;
  let img = tv.poster_path !== null ;

  function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    // Split the formatted date into day, month, and year parts
    const [month, day, year] = formattedDate.split(' ');
    return `${month} ${day} ${year}`;
  }
  
  function formatDateYear(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.split(' ');
    return `(${year})`;
  }


  return (
    <>
    <section>
      <div className="container-fluid details px-0" style={{background:`url(${url_cover}) center/ cover no-repeat`}}>
      <div className="over-lay">
        <div className="row m-5 cont" key={tv.id}>
          <div className="col-md-4 container-cover mb-5">
            <h1 className="name1 my-4">{tv.name} {formatDateYear(tv.first_air_date)}</h1>
            <img className="card-img-top rounded" src={img ? url_img : `/assets/img/no-cover.png`} alt="tv Poster"/>
          </div>
          <div className="col-md-8">
            <h1 className="name2">{tv.name} {formatDateYear(tv.first_air_date)}</h1>
            {/* <ul className="mb-3 genres">
              {tv.genres.map((g)=>{
                return(
                  <li className="m-1 rounded">{g.name}</li>
                );
              })}
            </ul> */}
            <ul className="mb-3 genres">
              <li className="m-1 rounded"><i className="bi bi-star-fill"></i>  {tv.vote_average}</li>
              <li className="m-1 rounded"><i className="bi bi-hand-thumbs-up-fill"></i>  {tv.vote_count}</li>
              <li className="m-1 rounded"><i className="bi bi-calendar-fill"></i>  {formatDate(tv.first_air_date)}</li>
            </ul>
            <div className="container-rating my-4">
              <div className="rating position-relative">
                <span className="rate position-absolute top-50 start-50 translate-middle">
                  {Math.round(tv.vote_average * 10)}%
                </span>
                <CircularProgress variant="determinate" value={tv.vote_average * 10} className="progres"/>
              </div>
            </div>
            <h3 className="mb-3">Overview</h3>
            <p className="mb-5">{tv.overview}</p>
            <ul className="info">
              <li>Status : <span id="info">{tv.status}</span></li>
              <li>Release Date : <span id="info">{formatDate(tv.first_air_date)}</span></li>
              <li>Language : <span id="info">{tv.original_language}</span></li>
            </ul><hr/>
            <ul className="info">
              <li>Number Of Episodes : <span id="info">{tv.number_of_episodes}</span></li>
              <li>Number Of Seasons : <span id="info">{tv.number_of_seasons}</span></li>
            </ul><hr/>
            <p className="my-3"><i className="bi bi-badge-ad-fill"></i> Tagline : <span id="info">{tv.tagline}</span></p>
          </div>
        </div>
        <div className="opacity"></div>
        </div>
      </div>
    </section>

    
    <div className="container cast mb-5">
      <h1 className="mb-4">Top Cast</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-4">
        {cast.slice(0, 6).map((cast) => {
          return (
            <Cast cast={cast} key={cast.id}/>
          )
        })}
      </div>
    </div>

    <div className="container movies mb-5">
      <h3 className="mb-4">Recommendations</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {recommend.length == 0 ? <h4 className="my-5" style={{textAlign:'center',width:'100%'}}>Not any Recommended yet</h4> : recommend.slice(0,5).map((tvshow)=>{
          return(
            <Tv tv={tvshow} key={tvshow.id}/>
          )
        })}
      </div>
    </div>

    </>
  );
}

export default Details_Tv;