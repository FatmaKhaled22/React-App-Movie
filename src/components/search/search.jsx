import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/instance";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Search() {

  const [searchValue, setSearchValue] = useState("");
  const [searchMulti, setSearchMulti] = useState([]);

  // const resultSearch = () => {
  //   const newSearchMovies = movies.filter((multi) =>
  //     multi.title.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setSearchMovies(newSearchMovies);
  // };

  const resultSearch = () => {
    axiosInstance.get('/search/multi', { 
      params: { query: `${searchValue}`} 
    }).then((res)=>{
      console.log("result of search -----> ", res.data);
      setSearchMulti(res.data.results);
    }).catch((err)=>{ 
      console.log("error ---->", err);
    });
  };


  useEffect(()=>{
    resultSearch();
  },[searchValue])


  return (
    <>
      <div className="container movies">
        <div className="my-5 d-flex flex-row" >
          <input
            className="form-control form-control-lg rounded-start-pill"
            type="text" placeholder="Search for a movie or tv show........."
            onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
          />
          <button id="searchBtn" className="rounded-end-circle"onClick={resultSearch}><i className="bi bi-search"></i></button>
        </div>
        <h2 className="mb-4">Search result of "{searchValue}"</h2>
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mb-5">
          {searchMulti.map((multi) => {
            const url_img = `https://image.tmdb.org/t/p/w500/${multi.poster_path}`;
            const url_img2 = `https://image.tmdb.org/t/p/w500/${multi.profile_path}`;
            const type = multi.media_type  == 'movie' ? `/movie/details/${multi.id}` : `/tv/details/${multi.id}` ;
            return (
              <Link to={type}>
              <div className="col" key={multi.id}>
                <div className="card">
                  <img src={url_img2} className="card-img-top" alt="multi-img" />
                  <img src={url_img} className="card-img-top" alt="multi-img" />
                  <div className="card-body my-2">
                    <h6 className="card-title">{multi.title}{multi.name}</h6>
                    <p className="card-text mb-2">{multi.release_date}{multi.first_air_date}</p>
                    {/* <div className="container-rating">
                      <div className="rating position-relative">
                        <span className="rate position-absolute top-50 start-50 translate-middle">{multi?.vote_average * 10}%</span>
                        <CircularProgress variant="determinate" value={multi?.vote_average * 10} className="progres"/>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
