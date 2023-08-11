import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Course from "./component/Course";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Signup from "./component/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/course" element={<Course />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
