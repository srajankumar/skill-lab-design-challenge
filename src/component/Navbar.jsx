import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feedback from "./Feedback";

const Navbar = () => {
  return (
    <nav className="text-bg-info bg-primary navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16Z"
            />
          </svg>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <button type="button" class="btn btn-primary">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <button type="button" class="btn btn-primary">
                  About
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <button type="button" class="btn btn-primary">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-2 ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                <button type="button" class="btn btn-primary">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
          <Feedback />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
