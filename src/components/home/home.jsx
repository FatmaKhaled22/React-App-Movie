import Hero from "./hero-sec/hero";
import { Link , Outlet} from "react-router-dom";
import './hero-sec/hero.css';
import Home_Tv from "./home-tv";
import Home_Movie from "./home-movie";


function Home() {

  return (
    <>
    <Hero/>
    {/* <div className="container">
    <div className="sec-select m-4 d-flex justify-content-between">
      <h1>MOVIE LISTS</h1>
      <div className="group-btn">
        <button className="btn"><Link to="popular">Popular</Link></button>
        <button className="btn"><Link to="now_playing">Playing Now</Link></button>
        <button className="btn"><Link to="top_rated">Top Rated</Link></button>
        <button className="btn"><Link to="up_com">Upcoming</Link></button>
      </div>
    </div>
    </div>
    <Outlet /> */}
    <Home_Movie/>
    <Home_Tv/>

    {/* <div className="container">
        <div className="sec-select m-4 d-flex justify-content-between">
            <h1>TV LISTS</h1>
            <div className="group-btn">
                <button className="btn"><Link to="/home/tv/popular">Popular</Link></button>
                <button className="btn"><Link to="/home/tv/top_rated">Top Rated</Link></button>
                <button className="btn"><Link to="/home/tv/air">On Air</Link></button>
                <button className="btn"><Link to="/home/tv/today">Today</Link></button>
            </div>
        </div>
    </div>
    <Outlet/> */}

    {/* <Home_Tv/> */}
    </>
  );
}

export default Home;