import React from "react";
import "./Main.css";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <h2 className="intro">Hello,I'm</h2>
          <h1 className="name">Srinath</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          </p>
          <div className="buttons">
            <button className="btn">Contact</button>
            <button className="btn">Download CV</button>
          </div>
        </div>
        <div className="right">
          <div className="wrap-img">
            <h1 className="x">10X</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
