import React, { useState, useEffect } from "react";
import { Menu, Close } from "../assets/index.js";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickHandle = () => {
    setIsNavbarOpened((prev) => !prev);
  };

  const handleHeadingClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`w-full shadow-md dark:shadow-sm dark:shadow-white md:backdrop-blur-sm mt-0 lg:fixed lg:top-0 transition-colors duration-300 z-50 ${
        isScrolled ? "bg-white/80 dark:md:bg-black/50" : "bg-white dark:bg-black"
      }`}
    >
      <header
        className={`flex justify-between h-20 items-center md:mt-6 z-50 md:w-[1236px] px-2 md:px-5 lg:m-auto`}
      >
        <h1
          className="text-lg font-bold cursor-pointer md:text-xl"
          onClick={handleHeadingClick}
        >
          <a href="#home">
            <em className="dark:text-white">{"< React"}</em>
            <span></span>
            <span className="gradient-color text-transparent">
              <em>{"Mode />"}</em>
            </span>
          </a>
        </h1>
       {isNavbarOpen? <img
          src={Close}
          alt="Menu"
          className="w-6 block  md:hidden cursor-pointer"
          onClick={onClickHandle}
        /> : <i class="fa-solid fa-bars dark:text-white text-black text-xl md:hidden" onClick={onClickHandle}></i>}
        <ul
          className={`block absolute min-h-screen z-30 top-20 left-0 w-full bg-white dark:bg-black dark:md:bg-transparent md:bg-transparent ${
            isNavbarOpen ? "translate-x-0" : "-translate-x-[1000px]"
          } md:translate-x-0 text-center md:h-auto md:static md:w-fit md:flex transition-all ease-in-out duration-500 `}
          onClick={onClickHandle}
        >
          <li className="relative menu font-semibold text-md mb-5 sm:mb-0 mt-5 z-50 sm:mt-0 border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#home" className="menu-item" data-text="Home">
              Home
            </a>
          </li>
          <li className="relative menu font-semibold text-md mb-5 sm:mb-0 mt-5 z-50 sm:mt-0 border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#about" className="menu-item" data-text="About">
              About
            </a>
          </li>
          <li className="relative menu font-semibold text-md mb-5 sm:mb-0 mt-5 z-50 sm:mt-0 border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#experience" className="menu-item" data-text="Experience">
              Experience
            </a>
          </li>
          <li className="relative menu font-semibold text-md mb-5 sm:mb-0 mt-5 z-50 sm:mt-0 border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#projects" className="menu-item" data-text="Projects">
              Projects
            </a>
          </li>
          <li className="relative menu font-semibold text-md mb-5 sm:mb-0 mt-5 z-50 sm:mt-0 border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#education" className="menu-item" data-text="Education">
              Education
            </a>
          </li>
          <li className="relative menu font-semibold text-md mb-5 sm:mb-0 mt-5 z-50 sm:mt-0 border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#contact" className="menu-item" data-text="Contact">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
