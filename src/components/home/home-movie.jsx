import React from "react";
import { Link , Outlet} from "react-router-dom";

function Home_Movie() {
  return (
    <>
      <div className="container">
        <div className="sec-select m-4 d-flex justify-content-between">
          <h1>MOVIE LISTS</h1>
          <div className="group-btn">
            <button className="btn">
              <Link to="popular">Popular</Link>
            </button>
            <button className="btn">
              <Link to="now_playing">Playing Now</Link>
            </button>
            <button className="btn">
              <Link to="top_rated">Top Rated</Link>
            </button>
            <button className="btn">
              <Link to="up_com">Upcoming</Link>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home_Movie;
