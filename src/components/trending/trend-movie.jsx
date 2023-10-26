import React from "react";
import { useSelector } from "react-redux";
import Movie from "../movie-list/movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import '../movie-list/movies.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function Trend_Movies() {

  const movies = useSelector((state) => state.trending.trend_movie.results);
  console.log("trend_movies ---->" , movies);

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
            {movies.map((movie)=>{
              return(
                <SwiperSlide key={movie.id} className="p-2">
                  <Movie movie={movie} key={movie.id}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
       
      </div>
    </>
  );
}

export default Trend_Movies;