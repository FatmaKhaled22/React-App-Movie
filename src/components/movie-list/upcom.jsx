import React from "react";
import { useSelector } from "react-redux";
import Movie from "./movie";
import { Carousel } from '@trendyol-js/react-carousel';
import './movies.css';

function Movies_Upcom() {

  function RightArrow(){
    return(<i className="bi bi-arrow-right-circle position-absolute top-50 start-100 translate-middle"></i>);
  }

  function LeftArrow(){
    return(<i className="bi bi-arrow-left-circle position-absolute top-50 start-0 translate-middle"></i>);
  }

  const movies = useSelector((state) => state.movies.upcoming.results);
  console.log("Movies ---->" , movies);


  return (
    <>
      <div className="container movies">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 p-3">
          <Carousel show={5} slide={1} swiping={true} rightArrow={<RightArrow/>} leftArrow={<LeftArrow/>} className="mt-0">
            {movies.map((movie)=>{
              return(
                <div className="m-2">
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

export default Movies_Upcom;