// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import './index.css'; // Import your CSS file here
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
function App() {
  return (
    <>
      <Hero />
      <Hero3 />
      <Hero4 />
    </>
  );
}

export default App;
