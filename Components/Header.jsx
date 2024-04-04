"use client";
import React, { useEffect } from "react";
import "./Header.css";
import content from "./content/content.json";

const Header = () => {
  const { navLink } = content;

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    const handleNavLinkClick = () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    document.querySelectorAll(".nav-link").forEach((n) => {
      n.addEventListener("click", handleNavLinkClick);
    });

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      document.querySelectorAll(".nav-link").forEach((n) => {
        n.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <>
      <header>
        <nav class="navbar">
          <a href="#" class="logo">
            Srinath10X
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">
                {navLink.link1}
              </a>
            </li>
            <li class="nav-item">
              <a href="#ab" class="nav-link">
                {navLink.link2}
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                {navLink.link3}
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">
                {navLink.link4}
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
