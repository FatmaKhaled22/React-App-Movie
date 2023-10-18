import Hero from "./hero-sec/hero";
import Trend_Movies from "../trending/trend-movie";
import Trend_Tv from "../trending/trend-tv";
import './hero-sec/hero.css';


function Home() {

  return (
    <>
    <Hero/>
    <div className="container">
      <div className="sec-select m-4 d-flex justify-content-between">
        <h1>TRENDING MOVIES</h1>
      </div>
    </div>
    <Trend_Movies/>

    <div className="container">
      <div className="sec-select m-4 d-flex justify-content-between">
        <h1>TRENDING TV SHOWS</h1>
      </div>
    </div>
    <Trend_Tv/>


    </>
  );
}

export default Home;