import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tv from "../tv-list/tv";
import { getTvAir } from "../../services/tv-show-list";
import { setTvShowsonAir } from "../../store/reducer/tv";
import Pagination from "../paginate/paginate";
import "../movie-list/movies.css";

function Tv_Shows() {

  const tvshows = useSelector((state) => state.tvshows.onAir);
  console.log("tv ---->", tvshows);

  //////////////////////////////////////////////////
  /// Handling Sort ///
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

  ////////////////////////////////////////////////////////
  /// Handling Paginate ///
  const [page, setPage] = useState(1);
  var dispatch = useDispatch();

  const fetchTvShows = async (query) => {

    getTvAir(query).then((response) => {
      const tvshows = response.results;
      console.log("movies after paginate --->",tvshows);
      dispatch(setTvShowsonAir(tvshows));
      console.log("res paginate --->", response.results);
      console.log("page--->",page);
    }).catch((e) => {
      console.log("error in fetch person --> ",e);
    });
  };

  useEffect(() => {
    fetchTvShows(page);
  }, [page]);

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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mb-5">
          {sortedTvShows.map((tvshow) => {
            return <Tv tv={tvshow} key={tvshow.id} />
          })}
        </div>
        {/* Pagination */} 
        <Pagination setPage={setPage} page={page}/>
      </div>
    </>
  );
}

export default Tv_Shows;
