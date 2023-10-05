import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-3 py-1">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to="/home" className="nav-link">
            <img src="/assets/img/logo4.png" alt="Logo" width="40" height="40" className="my-2"/><span className="px-3 logo-text">Movies</span>
          </NavLink>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tv" className="nav-link">TV Shows</NavLink>
              </li>
              <div id="navy">
                <ul className="navbar-nav d-flex align-content-center flex-wrap nav">
                  <ul className="navbar-nav nav">
                    <li className="px-4">
                      <NavLink to="/search" className="nav-link">
                        <i className="bi bi-search"></i>
                      </NavLink>
                    </li>
                  </ul>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
