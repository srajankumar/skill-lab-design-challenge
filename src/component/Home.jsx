import React from "react";
import BreadCrumb from "./BreadHome";

const Home = () => {
  return (
    <div className="min-vh-100">
      <BreadCrumb />
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16Z"
          />
        </svg>{" "}
        <h1>Learn - IT</h1>
      </div>
      <h6 className="text-center">Learn the IT - topics for free</h6>
      <div className="p-5">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/assets/c0.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/assets/c1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/assets/c3.jpeg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="min-vh-100">
        <h1 className="text-center py-5">Courses Offered</h1>
        <div className="row px-5 pb-5">
          <div className="col px-3 py-3">
            <div className="card">
              <img
                src="/assets/c-programming.png"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">C Programming</h5>
                <p className="card-text">Learn C programming from basics</p>
                <a href="#" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
          <div className="col px-3 py-3">
            <div className="card">
              <img src="/assets/c++.jpg" className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">C++ Programming</h5>
                <p className="card-text">
                  Explore the power of C++ programming language
                </p>
                <a href="#" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
          <div className="col px-3 py-3">
            <div className="card">
              <img src="/assets/java.jpeg" className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">Java Programming</h5>
                <p className="card-text">
                  Master Java programming for building applications
                </p>
                <a href="#" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5 px-5">
          <div className="col px-3 py-3">
            <div className="card">
              <img
                src="/assets/python.jpg"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">Python Programming</h5>
                <p className="card-text">
                  Dive into the world of Python programming
                </p>
                <a href="#" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
          <div className="col px-3 py-3">
            <div className="card">
              <img
                src="/assets/react.jpeg"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">
                  Learn React for building interactive web applications
                </p>
                <a href="#" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
          <div className="col px-3 py-3">
            <div className="card">
              <img src="/assets/js.png" className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text">
                  Discover the fundamentals of JavaScript
                </p>
                <a href="#" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
