import React from "react";
import { Container } from "./index.js";
import { Typewriter } from "react-simple-typewriter";
import { RightArrow, Image, Resume } from "../assets/index.js";

function Home() {
  return (
    <Container>
      <main className="mt-10 sm:mt-28 flex flex-col sm:flex-row gap-20 sm:gap-5">
        <div className=" max-h-fit">
          <h1 className="text-mxl sm:text-3xl font-bold sm:-ml-1">
            Hii, I am Pratik
          </h1>
          <h1 className="gradient-color text-mxl w-full h-[50px] font-bold text-transparent -mt-2 sm:text-3xl sm:w-[620px] sm:h-[85px] sm:-mt-3 sm:-ml-1">
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
              ]}
              loop={true}
              delaySpeed={1000}
              typeSpeed={100}
            />
          </h1>
          <p className="text-md leading-7 w-full mt-2 sm:text-lg sm:leading-8 sm:w-[590px] sm:mt-4">
            I am a passionate Frontend / Full stack developer based in Pimpri
            Chinchwad, India. I dive deep into JavaScript and love crafting
            sleek, efficient web apps.
          </p>
          <div className="flex gap-2 sm:gap-10 items-center relative top-10 left-3">
            <div className="gradient-btn sm:w-[223px] sm:h-[67px] rounded-md">
              <a
                href="#contact"
                className="bg-black flex items-center justify-center text-white font-semibold text-md w-[140px] h-[49px] sm:text-lg sm:w-[223px] sm:h-[67px] -translate-x-3 -translate-y-3 rounded-md hover:-translate-x-0 hover:-translate-y-0 transition ease-in-out duration-300"
              >
                Get in touch
              </a>
            </div>
            <a
              href={Resume}
              className="group text-md sm:text-lg sm:p-2 cursor-pointer"
              download
              target="_blank"
            >
              Download Resume
              <img
                src={RightArrow}
                className="ml-2 w-5 transition ease-in-out duration-300 group-hover:translate-x-3 inline-block"
              />
            </a>
          </div>
        </div>
        <div className="sm:w-[500px]">
          <img src={Image} alt="Image" className="sm:relative -top-5 left-16" />
        </div>
      </main>
    </Container>
  );
}

export default Home;
