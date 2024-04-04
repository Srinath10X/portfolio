import "./Main.css";
import { desc, intro, name } from "./content/content.json";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <h2 className="intro">{intro}</h2>
          <h1 className="name">{name}</h1>
          <p className="desc">{desc}</p>
          <div className="buttons">
            <button className="btn">
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </a>
            </button>
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
