import React from "react";
import { Container } from "./index.js";
import { EducationImage, DegreeCap } from "../assets/index.js";

function Education() {
  return (
    <Container>
      <section id="education" className="mt-14 sm:mt-20">
        <div className="mb-14 sm:mb-32 flex flex-col items-center">
          <h1 className="text-mxl sm:text-2xl inline-block font-bold mb-2">
            Education
          </h1>
          <div className="h-[5px] gradient-btn w-[73px] sm:w-[88px] rounded-md"></div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between drop-shadow-md ">
          <div className="mt-7 sm:mt-0 sm:w-[550px] sm:h-[420px] sm:relative">
            <img
              src={EducationImage}
              alt="Education"
              className="sm:absolute sm:h-[480px] sm:-top-14"
            />
          </div>
          <div className="flex flex-col gap-5 sm:gap-16 sm:w-[604px]">
            <div className=" bg-gray-white py-2 px-2 sm:px-5 text-center h-[137px]">
              <h2 className="gradient-color text-transparent inline-block font-bold text-md">
                Dec 2022 – April 2024
              </h2>
              <div className="text-left flex items-center gap-4 text-md mt-5">
                <img src={DegreeCap} className="w-[24px] sm:w-[30px]" />
                <div>
                  <h1 className="font-bold">Master of Computer Application</h1>
                  <p className="font-light text-sm sm:text-md">
                    Savitribai Phule Pune University, Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-white py-2 px-2 sm:px-5 text-center h-[137px]">
              <h2 className="gradient-color text-transparent inline-block font-bold">
                Sep 2019 – Aug 2022
              </h2>
              <div className="text-left flex items-center gap-4 text-md mt-5">
                <img src={DegreeCap} className="w-[24px] sm:w-[30px]" />
                <div>
                  <h1 className="font-bold mb-1">
                    Bachelor of Computer Application
                  </h1>
                  <p className="font-light text-sm sm:text-md">
                    Amravati University, Yavatmal, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Education;
