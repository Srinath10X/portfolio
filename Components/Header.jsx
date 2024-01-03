import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar">
          <a href="#" class="logo">
            Logo
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Work
              </a>
            </li>
            <li class="nav-item">
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
    </>
  );
};

export default Header;
