import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="text-center p-lg-6 hero-sec">
        <div className="col-xxl">
          <div className="text-hero">
            <h2>It's Time To Watch</h2>
            <h3>Unlimited Movie, TV Shows, & More.</h3>
            <div className="sec-select m-4">
              <div className="group-btn">
                <button className="btn"><i className="bi bi-play-fill"></i> WATCH NOW </button>
              </div>
            </div>
          </div>
          <div className="opacity-layer"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
