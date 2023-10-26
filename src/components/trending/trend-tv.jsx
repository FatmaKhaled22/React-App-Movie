import React from "react";
import { useSelector } from "react-redux";
import Tv from "../tv-list/tv";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import '../movie-list/movies.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


function Trend_Tv() {

  const tvshows = useSelector((state) => state.trending.trend_tv.results);
  console.log("tv_trend ---->" , tvshows);

  return (
    <>
      <div className="container movies">
        <div className="row">
          <Swiper
            slidesPerView={1} cssMode={true} navigation={true} spaceBetween={10} modules={[Navigation]}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },500: {
                slidesPerView: 2,
              },768: {
                slidesPerView: 3,
              },1100: {
                slidesPerView: 4,
              },1400: {
                slidesPerView: 5,
              },
            }}
          >
            {tvshows.map((tvshow)=>{
              return(
                <SwiperSlide key={tvshow.id} className="p-2">
                  <Tv tv={tvshow} key={tvshow.id}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
       
      </div>
    </>
  );
}

export default Trend_Tv;