import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
