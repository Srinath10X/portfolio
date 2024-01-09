import React from "react";
import "./About.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about" id="ab">
        <div className="ab-right">
          <div className="img">
            <Image src="/web.jpg" class="img-coding" height={300} width={300} />
          </div>
        </div>
        <div className="ab-left">
          <h2>About me</h2>
          <hr className="line" />
          <p className="about-desc">
            HTML, CSS, JavaScript enthusiast creating sleek and responsive
            websites. React aficionado for interactive web experiences. Team
            player 🤝 with a passion for user-centric design. Always learning
            and adapting to the latest trends.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
