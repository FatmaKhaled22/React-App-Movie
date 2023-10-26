import React from "react";
import { useSelector } from "react-redux";
import Movie from "./movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import './movies.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


function Movies_Pop() {

  const movies = useSelector((state) => state.movies.popular.results);
  console.log("Movies ---->" , movies);

  return (
    <>
      <div className="container movies mb-5">
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

export default Movies_Pop;
