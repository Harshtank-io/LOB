import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Services from "../pages/Service";
import Learn from "../pages/Learn";
import DSA from "../Topics/DSA";
import OOP from "../Topics/OOP";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/dsa" element={<DSA />} />
      <Route path="/oop" element={<OOP />} />
    </Routes>
  );
}

export default AppRoutes;
