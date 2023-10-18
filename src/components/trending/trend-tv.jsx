import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from '@trendyol-js/react-carousel';
import Tv from "../tv-list/tv";
import '../movie-list/movies.css';

function Trend_Tv() {

  function RightArrow(){
    return(<i className="bi bi-arrow-right-circle position-absolute top-50 start-100 translate-middle"></i>);
  }

  function LeftArrow(){
    return(<i className="bi bi-arrow-left-circle position-absolute top-50 start-0 translate-middle"></i>);
  }

  const tvshows = useSelector((state) => state.trending.trend_tv.results);
  console.log("tv_trend ---->" , tvshows);


  return (
    <>
      <div className="container movies mb-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 p-3">
          <Carousel show={5} slide={1} swiping={true} rightArrow={<RightArrow/>} leftArrow={<LeftArrow/>} className="mt-0">
            {tvshows.map((tvshow)=>{
              return(
                <div className="m-2" key={tvshow.id}>
                  <Tv tv={tvshow} key={tvshow.id}/>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Trend_Tv;