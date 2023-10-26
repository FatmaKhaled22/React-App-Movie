import React, { useEffect, useState } from "react";
import Movie from "../movie-list/movie";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesNow } from "../../services/movieServices";
import { setMoviesNow } from "../../store/reducer/movies";
import Pagination from "../paginate/paginate";
import "../movie-list/movies.css";
import './style.css';


function Movies() {

  const movies = useSelector((state) => state.movies.nowplaying);
  console.log("Movies ---->", movies);

  //////////////////////////////////////////////////
  /// Handling Sort ///
  const [SortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);
    console.log('value = ',value);
  };

  const sortedMovies = [...movies];

  switch(SortOption){
    case 'DES-Rate':
      sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
    break
    case "ASC-Rate":
      sortedMovies.sort((a, b) => a.vote_average - b.vote_average);
    break
    case 'ASC-Alph':
      sortedMovies.sort((a, b) => a.title > b.title ? 1 : -1);
    break
    case 'DES-Alph':
      sortedMovies.sort((a, b) => a.title > b.title ? -1 : 1);
    break
  }

  ////////////////////////////////////////////////////////
  /// Handling Paginate ///
  const [page, setPage] = useState(1);
  var dispatch = useDispatch();
  
  const fetchMovies = async (query) => {
  
    getMoviesNow(query).then((response) => {
      const movies = response.results;
      console.log("movies after paginate --->",movies);
      dispatch(setMoviesNow(movies));
      console.log("res paginate --->", response.results);
      console.log("page--->",page);
    }).catch((e) => {
      console.log("error in fetch person --> ",e);
    });
  };
  
  useEffect(() => {
    fetchMovies(page);
  }, [page]);


  return (
    <>
      <div className="container movies">
        <div className="select-sec mb-4 d-flex justify-content-between">
          <h3>Explore Movies</h3>
          <select className="form-select" value={SortOption} onChange={handleSortChange}>
            <option defaultValue>Sort By</option>
            <option value="ASC-Alph">Ascending (A - Z)</option>
            <option value="DES-Alph">Descending (Z - A)</option>
            <option value="ASC-Rate">Ascending By Rate</option>
            <option value="DES-Rate">Descending By Rate</option>
          </select>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mb-5">
          {sortedMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />
          })}
        </div>
        {/* Pagination */} 
        <Pagination setPage={setPage} page={page}/>
      </div>
    </>
  );
}

export default Movies;
