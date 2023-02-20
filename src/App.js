import React from 'react';
import './index.css';
import Home from './section/Home/home';
import About from './section/About/About';
import Project from './section/Project/Project';
import Contact from './section/Contact/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
