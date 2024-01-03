import React from "react";
import Image from "next/image";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <h2 className="intro">Hello,I'm</h2>
          <br />
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
            {/*<Image
              className="img"
              src="/anime-coding-1.jpeg"
              height={400}
              width={400}
              alt=""
            />*/}
            <h1 className="x">10X</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
