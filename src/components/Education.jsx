import React from "react";
import { Container } from "./index.js";
import { EducationImage, DegreeCap } from "../assets/index.js";

function Education() {
  return (
    <Container>
      <section id="education" className="mt-24">
        <div className="mb-32 flex flex-col items-center">
          <h1 className="text-2xl inline-block font-bold mb-2">Education</h1>
          <div className="h-[5px] gradient-btn w-[88px] rounded-md"></div>
        </div>
        <div className="flex justify-between drop-shadow-md ">
          <div className="w-[550px] h-[420px] relative">
            <img
              src={EducationImage}
              alt="Education"
              className="absolute h-[480px] -top-14"
            />
          </div>
          <div className="flex flex-col gap-16 w-[604px]">
            <div className=" bg-gray-white py-2 px-5 text-center h-[137px]">
              <h2 className="gradient-color text-transparent inline-block font-bold">
                Dec 2022– April 2024
              </h2>
              <div className="text-left flex items-center gap-4 text-md mt-5">
                <img src={DegreeCap} className="w-[30px]" />
                <div>
                  <h1 className="font-bold">Master of Computer Application</h1>
                  <p className="font-light">
                    Savitribai Phule Pune University, Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-white py-2 px-5 text-center h-[137px]">
              <h2 className="gradient-color text-transparent inline-block font-bold">
                Dec 2022– April 2024
              </h2>
              <div className="text-left flex items-center gap-4 text-md mt-5">
                <img src={DegreeCap} className="w-[30px]" />
                <div>
                  <h1 className="font-bold mb-1">
                    Bachelor of Computer Application
                  </h1>
                  <p className="font-light">
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
