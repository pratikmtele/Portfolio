import React from "react";
import { Container } from "./index.js";
import Image from "../assets/image.png";
import { Typewriter } from "react-simple-typewriter";
import RightArrow from "../assets/right-arrow.png";

function Home() {
  return (
    <div>
      <Container>
        <main className="mt-28 flex gap-5">
          <div className=" max-h-fit">
            <h1 className="text-3xl font-bold -ml-1">Hii, I am Pratik</h1>
            <h1 className="gradient-color text-3xl font-bold text-transparent w-[620px] h-[85px] -mt-3 -ml-1">
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
            <p className="text-lg leading-8 w-[590px] mt-4">
              I am a passionate Frontend / Full stack developer based in Pimpri
              Chinchwad, India. I dive deep into JavaScript and love crafting
              sleek, efficient web apps.
            </p>
            <div className="flex gap-10 items-center relative top-10 left-3">
              <div className=" gradient-btn w-[223px] h-[67px] rounded-md">
                <a
                  href="#contact"
                  className="bg-black flex items-center justify-center text-white font-semibold text-lg w-[223px] h-[67px] -translate-x-3 -translate-y-3 rounded-md hover:-translate-x-0 hover:-translate-y-0 transition ease-in-out duration-300"
                >
                  Get in touch
                </a>
              </div>
              <button className="group text-lg p-2">
                Download Resume
                <img
                  src={RightArrow}
                  className="ml-2 w-5 transition ease-in-out duration-300 group-hover:translate-x-3 inline-block"
                />
              </button>
            </div>
          </div>
          <div className="w-[500px]">
            <img src={Image} alt="Image" className="relative -top-5 left-16" />
          </div>
        </main>
      </Container>
    </div>
  );
}

export default Home;
