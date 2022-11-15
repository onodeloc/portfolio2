import React from "react";
import "./gen.css";

const Projects = () => (

  <body>
    <div id='about-me'>
      <h1>Projects</h1>
      <div class='about-me-container'>
        <div id='about-me-text-container'>
          <p id="two">
            I have experience with Java, C++, C, Python, Typescript, Javascript, and HTML/CSS.
            Here are some of the projects in which I've used these skills. <br></br></p>
          <p id="two">
          – <a class="change" href="https://github.com/onodeloc/portfolio2">This website</a><br></br>
          {/* – <a class="change" href="https://onodeloc.com/rain">A rain application!</a><br></br> */}
          </p>

        </div>
        {/* <img class="self" src="/images/headshot2.jpg" alt="" /> */}
      </div>
    </div>
  </body>
);

export default Projects;