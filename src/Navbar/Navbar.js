import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpg";
const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
        <img
          class="w-16 h-16 text-white p-2  rounded-full"
          src={logo}
          alt="logo img"
        />
        <span class="ml-3 text-xl">Tashfeen Khan</span>
        {/* </a> */}
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" class="mr-5 hover:text-gray-900 font-bold text-2xl">
            Home
          </Link>
          <Link to="/about" class="mr-5 hover:text-gray-900 font-bold text-2xl">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
