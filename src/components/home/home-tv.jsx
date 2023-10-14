import { Link, Outlet } from "react-router-dom";
import "./hero-sec/hero.css";

function Home_Tv() {
  return (
    <>
      <div className="container">
        <div className="sec-select m-4 d-flex justify-content-between">
          <h1>TV LISTS</h1>
          <div className="group-btn">
            <button className="btn">
              <Link to="popular">Popular</Link>
            </button>
            <button className="btn">
              <Link to="top_rated">Top Rated</Link>
            </button>
            <button className="btn">
              <Link to="air">On Air</Link>
            </button>
            <button className="btn">
              <Link to="today">Today</Link>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home_Tv;
