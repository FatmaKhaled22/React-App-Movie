import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="text-center p-lg-6 hero-sec">
        <div className="col-xxl">
            <div className="text-hero">
                <h1>Welcome</h1>
                <h3>Unlimited Movie, TVs Shows, & More.</h3>
                <div className ='m-5 d-flex flex-row'>
                  <input  className="form-control form-control-lg rounded-start-pill" type="text" placeholder="Search for a movie or tv show" aria-label=".form-control-lg example"/>
                  <button id='searchBtn' className='rounded-end-circle'><i className ="bi bi-search"></i></button>
                </div>
            </div>
          <div className="opacity-layer"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
