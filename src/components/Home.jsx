import { Container } from "./index.js";
import { Typewriter } from "react-simple-typewriter";
import { RightArrow, Image, Resume } from "../assets/index.js";

function Home() {
  return (
    <Container>
      <main
        id="home"
        className="scroll-offset md:mt-10 flex flex-col md:flex-row gap-20 md:gap-5 md:pt-[150px] lg:pt-[200px]"
      >
        <div className="info-part max-h-fit pt-5 md:pt-0">
          <h1 className="text-mxl md:text-2xl lg:text-3xl font-bold lg:-ml-1">
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
          <p className="text-md leading-7 w-full md:w-[450px] md:text-lg md:leading-8 lg:w-[590px] md:mt-4">
            I am a passionate Frontend / Full stack developer based in Pimpri
            Chinchwad, India. I dive deep into JavaScript and love crafting
            sleek, efficient web apps.
          </p>
          <div className="flex gap-2 lg:gap-10 items-center relative top-10 left-3">
            <div className="gradient-btn lg:w-[223px] lg:h-[67px] rounded-md">
              <a
                href="#contact"
                className="bg-black flex items-center justify-center text-white font-semibold text-md w-[140px] h-[49px] md:w-[200px] md:h-[67px] md:text-lg lg:w-[223px] lg:h-[67px] -translate-x-3 -translate-y-3 rounded-md hover:-translate-x-0 hover:-translate-y-0 transition ease-in-out duration-300"
              >
                Get in touch
              </a>
            </div>
            <a
              href={Resume}
              className="group text-md md:text-lg md:p-2 cursor-pointer"
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
        <div className="image-part sm:w-[500px]">
          <img src={Image} alt="Image" className="sm:relative -top-5 left-16" />
        </div>
      </main>
    </Container>
  );
}

export default Home;
