import {
  Navbar,
  Home,
  About,
  Projects,
  Education,
  Certifications,
  Contact,
  Footer,
} from "./components/index.js";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(".info-part", { opacity: 0, x:-200}, { opacity: 1, x:0, duration: 1 });
    gsap.fromTo(".image-part", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1 });
    gsap.set(".about-heading", { opacity: 0, x:-200 });
    gsap.set(".about-content", { opacity: 0, x:-200 });
    gsap.set(".tools-heading", { opacity: 0, x:-200 });
    gsap.set(".skill-card", { opacity: 0, x:-200 });
    gsap.to(".about-heading", {
      scrollTrigger: {
        trigger: "#about",
        start: "-500px",
        end: "400px",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      translateX: 0,
      y: 0,
      duration: 1,
    });
    gsap.to(".about-content", {
      scrollTrigger: {
        trigger: ".container",
        start: "200px",
        end: "400px",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      translateX: 0,
      y: 0,
      duration: 1,
    });
    gsap.to(".tools-heading", {
      scrollTrigger: {
        trigger: ".container",
        start: "200px",
        end: "400px",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      translateX: 0,
      y: 0,
      duration: 1,
    });
    gsap.utils.toArray(".skill-card").forEach((card, i) => {
    gsap.fromTo(card,
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
        }
      }
    );
  });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
