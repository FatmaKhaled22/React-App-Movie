import Hero from "./hero-sec/hero";
import Trend_Movies from "../trending/trend-movie";
import Trend_Tv from "../trending/trend-tv";
import { useState } from "react";
import Movies_Pop from './../movie-list/popular';
import Movies_Top from './../movie-list/toprated';
import Tv_Pop from "../tv-list/poular";
import Tv_Top from "../tv-list/toprated";
import './hero-sec/hero.css';


function Home() {

  ///////////////////// TopRated ////////////////////////
  const [activeTop, setActiveTop] = useState("movie_top");
  const handleTop1 = () => {
    setActiveTop("movie_top");
  };
  const handleTop2 = () => {
    setActiveTop("tv_top");
  };

  //////////////////// Popular ////////////////////////
  const [activePop, setActivePop] = useState("movie_pop");
  const handlePop1 = () => {
    setActivePop("movie_pop");
  };
  const handlePop2 = () => {
    setActivePop("tv_pop");
  };

  //////////////////// Trending ////////////////////////
  const [activeTrend, setActiveTrend] = useState("movie_trend");
  const handleTrend1 = () => {
    setActiveTrend("movie_trend");
  };
  const handleTrend2 = () => {
    setActiveTrend("tv_trend");
  };

  return (
    <>
    <Hero/>

    <div className="container">
      <div className="sec-select m-4 d-flex justify-content-between">
        <h1>Trending</h1>
        <div className="group-btn">
          <button onClick={handleTrend1} className={activeTrend === "movie_trend btn" ? "active btn" : "btn"}>Movies </button>
          <button onClick={handleTrend2} className={activeTrend === "tv_trend btn" ? "active btn" : "btn"}>Tv Shows</button>
        </div>
      </div>
    </div>
    {activeTrend === "movie_trend" ? <Trend_Movies /> : <Trend_Tv />}

    <div className="container">
      <div className="sec-select m-4 d-flex justify-content-between">
        <h1>Top Rated</h1>
        <div className="group-btn">
          <button onClick={handleTop1} className={activeTop === "movie_top btn" ? "active btn" : "btn"}>Movies </button>
          <button onClick={handleTop2} className={activeTop === "tv_top btn" ? "active btn" : "btn"}>Tv Shows</button>
        </div>
      </div>
    </div>
    {activeTop === "movie_top" ? <Movies_Top /> : <Tv_Top />}

    
    <div className="container">
      <div className="sec-select m-4 d-flex justify-content-between">
        <h1>What's Popular ?</h1>
        <div className="group-btn">
          <button onClick={handlePop1} className={activePop === "movie_pop btn" ? "active btn" : "btn"}>Movies </button>
          <button onClick={handlePop2} className={activePop === "tv_pop btn" ? "active btn" : "btn"}>Tv Shows</button>
        </div>
      </div>
    </div>
    {activePop === "movie_pop" ? <Movies_Pop /> : <Tv_Pop />}



    </>
  );
}

export default Home;