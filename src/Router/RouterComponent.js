import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CollapsibleExample from "../Navbar/Navbar";
import About from "../pages/about";
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <CollapsibleExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterComponent;
