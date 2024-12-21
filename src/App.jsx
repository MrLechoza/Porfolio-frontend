import React from "react";
import './App.css';
import Navbar from "./navbar.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <div className="bg-[#1e1e1e] h-full ">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;