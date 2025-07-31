import {
  Navbar,
  Home,
  About,
  Projects,
  Education,
  Contact,
  Footer,
} from "./components/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkExperience from "./components/WorkExperience.jsx";
import Lenis from 'lenis'

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useGSAP(() => {
    gsap.fromTo(
      ".info-part",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(
      ".image-part",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.set([
      ".about-heading",
      ".tools-heading",
      ".work-heading",
      ".project-heading",
      ".education-heading",
      ".contact-heading"
    ], { opacity: 0, x: 200 });
    gsap.set([
      ".about-content",
      ".skill-card",
      ".work-content",
      ".project",
      ".education-content",
      ".contact-content"
    ], { opacity: 0, x: -200 });

    const headingAnimations = [
      { selector: ".about-heading", trigger: ".about-heading", start: "top 59%", end: "bottom 60%" },
      { selector: ".tools-heading", trigger: ".skill-card", start: "top 90%", end: "bottom 99%" },
      { selector: ".work-heading", trigger: ".work-heading", start: "top 60%", end: "+=10%" },
      { selector: ".project-heading", trigger: ".project", start: "top 90%", end: "bottom 10%" },
      { selector: ".education-heading", trigger: ".education-heading", start: "top 60%", end: "+=10%" },
      { selector: ".contact-heading", trigger: ".contact-heading", start: "top 60%", end: "+=10%" },
    ];

    headingAnimations.forEach(({ selector, trigger, start, end, markers }) => {
      gsap.to(selector, {
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions: "play none none reverse",
          markers: markers || false,
        },
        opacity: 1,
        translateX: 0,
        y: 0,
        duration: 1,
      });
    });

    const contentAnimations = [
      { selector: ".about-content", trigger: ".about-content", start: "top 59%", end: "bottom 80%" },
      { selector: ".work-content", trigger: ".work-content", start: "top 60%", end: "+=10%"},
      { selector: ".education-content", trigger: ".education-content", start: "top 60%", end: "+=10%" },
      { selector: ".contact-content", trigger: ".contact-content", start: "top 60%", end: "+=10%" }
    ];

    contentAnimations.forEach(({ selector, trigger, start, end, markers }) => {
      gsap.to(selector, {
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions: "play none none reverse",
          markers: markers || false,
        },
        opacity: 1,
        translateX: 0,
        y: 0,
        duration: 1,
      });
    });

    gsap.utils.toArray(".skill-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 99%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });

    gsap.utils.toArray(".project").forEach((project_card, i) => {
      gsap.fromTo(
        project_card,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: project_card,
            start: "top 100%",
            end: "bottom 99%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
