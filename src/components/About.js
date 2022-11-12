import React from "react";
import "./gen.css";

// about is going to be the default home page

const About = () => (
  <body>
    <div id='about-me'>
        <h1>About me</h1>
      <div class='about-me-container'>
        <div id='about-me-text-container'>
          <p id="two">

            Welcome to my website.<br></br>
            I received my Bachelor of Computer Science in May 2022.<br></br>
            I enjoy using a variety of programming languages and tools to develop my front-end and back-end development abilities.<br></br>
            I'm currently working on advancing my full-stack abilities.
          </p>

        </div>
          <img class="self" src="/images/headshot2.jpg" alt="" />
      </div>
    </div>
  </body>
);

export default About;