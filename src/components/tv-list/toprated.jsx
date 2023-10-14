import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from '@trendyol-js/react-carousel';
import TvShows from "./tv";
import '../movie-list/movies.css';

function Tv_Top() {

  function RightArrow(){
    return(<i className="bi bi-arrow-right-circle position-absolute top-50 start-100 translate-middle"></i>);
  }

  function LeftArrow(){
    return(<i className="bi bi-arrow-left-circle position-absolute top-50 start-0 translate-middle"></i>);
  }

  const tvshows = useSelector((state) => state.tvshows.toprated.results);
  console.log("tv ---->" , tvshows);


  return (
    <>
      <div className="container movies">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 p-3">
          <Carousel show={5} slide={1} swiping={true} rightArrow={<RightArrow/>} leftArrow={<LeftArrow/>} className="mt-0">
            {tvshows.map((tvshow)=>{
              return(
                <TvShows tv={tvshow} key={tvshow.id}/>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Tv_Top;