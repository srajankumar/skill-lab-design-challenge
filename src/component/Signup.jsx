import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="pb-5">
        <section class="gradient-custom">
          <div class="container mt-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4">
                      <h2 class="fw-bold mb-5 text-uppercase">Sign Up</h2>
                      <div class="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeEmailX"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="typeEmailX">
                          Full Name
                        </label>
                      </div>
                      <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="typeEmailX">
                          Email
                        </label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="typePasswordX">
                          Password
                        </label>
                      </div>
                      <div class="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="typePasswordX">
                          Confirm Password
                        </label>
                      </div>

                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Sign Up
                      </button>

                      <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" class="mx-3 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="#1877F2"
                              d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                            />
                            <path
                              fill="#FFF"
                              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                            />
                          </svg>
                        </a>
                        <a href="#!" class="mx-3 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 128 128"
                          >
                            <path
                              fill="#1d9bf0"
                              d="M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"
                            />
                          </svg>{" "}
                        </a>
                        <a href="#!" class="mx-3 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 128 128"
                          >
                            <path
                              fill="#fff"
                              d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
                            />
                            <path
                              fill="#e33629"
                              d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
                            />
                            <path
                              fill="#f8bd00"
                              d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
                            />
                            <path
                              fill="#587dbd"
                              d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                            />
                            <path
                              fill="#319f43"
                              d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div>
                      <p class="mb-0">
                        Already have an account?
                        <Link class="text-white-50 fw-bold px-2" to="/login">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
