import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header class="header">
      <nav class="navbar">
        <a href="#" class="nav-branding">
          Dev.{" "}
        </a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/" class="nav-link">
              Home
            </a>
            <a href="/about" class="nav-link">
              About
            </a>
            <a href="#" class="nav-link">
              Project
            </a>
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
