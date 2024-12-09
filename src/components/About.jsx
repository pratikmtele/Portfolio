import React from "react";
import { Container, Skill } from "./index.js";
import { Skills } from "../assets/index.js";

function About() {
  return (
    <div>
      <Container>
        <section id="about" className="mt-14 sm:mt-20">
          <div className="mb-14 sm:mb-20 flex flex-col items-center">
            <h1 className="text-mxl sm:text-2xl inline-block font-bold mb-2">
              About Me
            </h1>
            <div className="h-[5px] gradient-btn rounded-md w-[79px] sm:w-[88px]"></div>
          </div>
          <div id="aboutme">
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              A bit about me
            </h2>
            <p className="text-md sm:text-lg leading-8 mb-5">
              Hi, I'm Pratik Manohar Tele, a passionate and dedicated full-stack
              web developer. I recently completed my Master of Computer
              Applications (MCA) from SPPU, graduating with a CGPA of 7.89.
              <br /> As a fresher, I have hands-on experience working on
              projects like a food ordering application built using the MERN
              stack and currently developing VidTube, an exciting web-based
              platform. My expertise lies in creating intuitive user interfaces,
              efficient back-end architectures, and bringing ideas to life on
              the web.
              <br /> I am eager to learn, adapt, and grow in the ever-evolving
              field of web development while contributing to innovative and
              impactful projects. Let's build something amazing together!
            </p>
          </div>
          <div id="skills">
            <h2 className="text-lg font-bold mb-5 sm:mb-8 sm:text-xl">
              Technologies and Tools
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-5">
              {Skills.map((skill) => (
                <Skill key={skill.name} name={skill.name} icon={skill.value} />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default About;
