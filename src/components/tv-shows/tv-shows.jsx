import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tv from "../tv-list/tv";
import "../movie-list/movies.css";

function Tv_Shows() {

  const tvshows = useSelector((state) => state.tvshows.popular.results);
  console.log("tv ---->", tvshows);

  
  const [SortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);
    console.log('value = ',value);
  };

  
  const sortedTvShows = [...tvshows];

  switch(SortOption){
    case 'DES-Rate':
      sortedTvShows.sort((a, b) => b.vote_average - a.vote_average);
    break
    case "ASC-Rate":
      sortedTvShows.sort((a, b) => a.vote_average - b.vote_average);
    break
    case 'ASC-Alph':
      sortedTvShows.sort((a, b) => a.name > b.name ? 1 : -1);
    break
    case 'DES-Alph':
      sortedTvShows.sort((a, b) => a.name > b.name ? -1 : 1);
    break
  }

  return (
    <>
      <div className="container movies">
      <div className="select-sec mb-4 d-flex justify-content-between">
          <h3>Explore TV Shows</h3>
          <select className="form-select" value={SortOption} onChange={handleSortChange}>
            <option defaultValue>Sort By</option>
            <option value="ASC-Alph">Ascending (A - Z)</option>
            <option value="DES-Alph">Descending (Z - A)</option>
            <option value="ASC-Rate">Ascending <i className="bi bi-arrow-down"></i></option>
            <option value="DES-Rate">Descending <i className="bi bi-arrow-up"></i></option>
          </select>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mb-5">
          {sortedTvShows.map((tvshow) => {
            return <Tv tv={tvshow} key={tvshow.id} />
          })}
        </div>
      </div>
    </>
  );
}

export default Tv_Shows;
