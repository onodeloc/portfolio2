import React from "react";
import "./gen.css";

// about is going to be the default home page

const About = () => (
  <div>
    <br></br>
    <h1 className="about">About me</h1>
    <div id='container'>
      
      <p id="two">

        Welcome to my (in-development) website.<br></br>
        I received my Bachelor of Computer Science in May 2022.<br></br>
        I enjoy using a variety of programming languages and tools to develop my front-end and back-end development abilities.<br></br>
        I'm currently working on advancing my full-stack abilities.
      </p>
      
      <img src="/images/headshot2.jpg" alt="" style={{ width: 200, height: 200 }} />
    </div>

  </div>
);

export default About;