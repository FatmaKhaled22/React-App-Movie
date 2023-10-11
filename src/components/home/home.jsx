import Hero from "./hero-sec/hero";
import { Link , Outlet} from "react-router-dom";
import './hero-sec/hero.css';


function Home() {

  return (
    <>
    <Hero/>
    <div className="container">
    <div className="sec-select m-4 d-flex justify-content-between">
      <h1>MOVIE LISTS</h1>
      <div className="group-btn">
        <button className="btn"><Link to="/home/popular">Popular</Link></button>
        <button className="btn"><Link to="/home/now_playing">Playing Now</Link></button>
        <button className="btn"><Link to="/home/top_rated">Top Rated</Link></button>
        <button className="btn"><Link to="/home/up_com">Upcoming</Link></button>
      </div>
    </div>
    </div>

    <Outlet />
    </>
  );
}

export default Home;