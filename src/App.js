import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/NaviBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/react.bootstrap/" element={<Home />} />
          <Route path="/react.bootstrap/users" element={<Users />} />
          <Route path="/react.bootstrap/about" element={<About />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
