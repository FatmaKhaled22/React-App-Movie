import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="text-center">
          <div className="footer-sec text-center p-0">
            <ul className="navbar-nav d-flex justify-content-center flex-row text-center">
              <li className="nav-item ">
                <a className="nav-link">Terms Of Use</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Privacy-Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">FAQ</a>
              </li>
            </ul>
          </div>
          <h5>&copy; 2023 All Rights Reserved</h5>
          {/* <h5>
            Created by : <span className="ctreated-by">Fatma Khaled</span>
          </h5> */}
        </div>

        <div className="text-center social-div pt-3">
          <div className="container" id="footer_social">
            {/* <!-- Section: Social media --> */}
            <section className="pb-3">
              <a className="btn btn-link btn-floating btn-lg m-2">
                <i className="bi bi-facebook"></i>
              </a>

              <a className="btn btn-link btn-floating btn-lg m-2">
                <i className="bi bi-twitter"></i>
              </a>

              <a className="btn btn-link btn-floating btn-lg m-2">
                <i className="bi bi-linkedin"></i>
              </a>

              <a className="btn btn-link btn-floating btn-lg m-2">
                <i className="bi bi-instagram"></i>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
