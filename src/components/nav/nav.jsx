import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-3 py-1">
        <div className="container">
          <NavLink to="/home" className="nav-link">
            <img src="/assets/img/logo4.png" alt="Logo" width="40" height="40" className="my-2"/><span className="px-3 logo-text align-middle">Movies</span>
          </NavLink>
          <div className="d-flex justify-content-between">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav search">
              <li className="px-4">
                <NavLink to="/search" className="nav-link"><i className="bi bi-search"></i></NavLink>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/fav" className="nav-link fw-bold"><i className="bi bi-heart text-light"> Favorites</i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link fw-bold"><i className="bi bi-film"> Movies</i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tv" className="nav-link fw-bold"><i className="bi bi-tv"> TV Shows</i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/people" className="nav-link fw-bold"><i className="bi bi-person-circle"> Femous</i></NavLink>
              </li>
              <li className="nav-item px-4 search2">
                <NavLink to="/search" className="nav-link"><i className="bi bi-search"></i></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
