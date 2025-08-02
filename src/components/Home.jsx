import { Container } from "./index.js";
import { Typewriter } from "react-simple-typewriter";
import { Image, Resume } from "../assets/index.js";

function Home() {
  return (
    <Container>
      <main
        id="home"
        className="scroll-offset md:mt-10 flex flex-col md:flex-row gap-20 md:gap-5 md:pt-[150px] lg:pt-[200px]"
      >
        <div className="info-part max-h-fit pt-5 md:pt-0">
          <h1 className="text-mxl md:text-2xl lg:text-3xl font-bold lg:-ml-1 dark:text-white">
            Hii, I am Pratik
          </h1>
          <h1 className="gradient-color text-mxl w-full h-[50px] font-bold text-transparent -mt-2 md:text-2xl lg:text-[54px] lg:w-[620px] md:h-[65px] lg:h-[70px] md:-mt-3 lg:-ml-1">
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
          <p className="text-md leading-7 w-full md:w-[450px] md:text-lg dark:text-white md:leading-8 lg:w-[590px] md:mt-4">
            Experienced in developing dynamic web applications with React,
            Node.js, and modern JavaScript frameworks.
          </p>
          <div className="flex gap-2 lg:gap-10 items-center relative top-10 left-3">
            <div className="gradient-btn lg:w-[223px] lg:h-[67px] rounded-md">
              <a
                href="#contact"
                className="bg-black dark:bg-white/50 dark:text-black flex items-center justify-center text-white font-semibold text-md w-[140px] h-[49px] md:w-[200px] md:h-[67px] md:text-lg lg:w-[223px] lg:h-[67px] -translate-x-3 -translate-y-3 rounded-md hover:-translate-x-0 hover:-translate-y-0 transition ease-in-out duration-300"
              >
                Get in touch
              </a>
            </div>
            <a
              href={Resume}
              className="group flex items-center text-md md:text-lg md:p-2 cursor-pointer dark:text-white"
              download
              target="_blank"
            >
              Download Resume
              <div className="ml-2 transition ease-in-out duration-300 group-hover:translate-x-3 inline-block">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 -6.5 36 36"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      id="icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="ui-gambling-website-lined-icnos-casinoshunter"
                        transform="translate(-212.000000, -159.000000)"
                        fill="#fff"
                        fill-rule="nonzero"
                      >
                        {" "}
                        <g
                          id="square-filled"
                          transform="translate(50.000000, 120.000000)"
                        >
                          {" "}
                          <path
                            d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                            id="right-arrow"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="image-part sm:w-[500px]">
          <img src={Image} alt="Image" className="sm:relative -top-5 left-16" />
        </div>
      </main>
    </Container>
  );
}

export default Home;
