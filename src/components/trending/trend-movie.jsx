import React from "react";
import { useSelector } from "react-redux";
import Movie from "../movie-list/movie";
import { Carousel } from '@trendyol-js/react-carousel';
import '../movie-list/movies.css';

function Trend_Movies() {

  function RightArrow(){
    return(<i className="bi bi-arrow-right-circle position-absolute top-50 start-100 translate-middle"></i>);
  }

  function LeftArrow(){
    return(<i className="bi bi-arrow-left-circle position-absolute top-50 start-0 translate-middle"></i>);
  }

  const movies = useSelector((state) => state.trending.trend_movie.results);
  console.log("trend_movies ---->" , movies);


  return (
    <>
      <div className="container movies">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 p-3">
          <Carousel show={5} slide={1} swiping={true} rightArrow={<RightArrow/>} leftArrow={<LeftArrow/>} className="mt-0">
            {movies.map((movie)=>{
              return(
                <div className="m-2" key={movie.id}>
                  <Movie movie={movie} key={movie.id}/>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Trend_Movies;