import React, { useState, useEffect } from "react";
import { Container } from "./index.js";
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
    <header
      className={`flex justify-between h-20 items-center sm:mt-6 z-50 w-full px-5 lg:mt-0 lg:fixed lg:w-full lg:px-[160px] lg:lgm-auto lg:top-0 transition-colors duration-300 shadow-md ${
        isScrolled ? "bg-white/80" : "bg-white"
      }`}
    >
      <h1
        className="text-lg font-bold cursor-pointer md:text-xl"
        onClick={handleHeadingClick}
      >
        <a href="#home">
          <em>{"< React"}</em>
          <span></span>
          <span className=" gradient-color text-transparent">
            <em>{"Mode />"}</em>
          </span>
        </a>
      </h1>
      <img
        src={isNavbarOpen ? Close : Menu}
        alt="Menu"
        className="w-6 block  md:hidden cursor-pointer"
        onClick={onClickHandle}
      />
      <ul
        className={`block absolute h-[270px] z-50 top-20 left-0 w-full bg-white lg:bg-transparent ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-[1000px]"
        } md:translate-x-0 text-center md:h-auto md:static md:w-fit md:gap-6 md:flex transition-all ease-in-out duration-500`}
        onClick={onClickHandle}
      >
        <li className="menu font-semibold text-md mb-5 sm:mb-0 mt-5 sm:mt-0 relative after:contents-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-right hover:after:origin-left">
          <a href="#about" className="menu-item">
            About
          </a>
        </li>
        <li className="relative font-semibold text-md mb-5 sm:mb-0 after:contents-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-right hover:after:origin-left">
          <a href="#projects" className="menu-item">
            Projects
          </a>
        </li>
        <li className="relative font-semibold text-md mb-5 sm:mb-0 after:contents-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-right hover:after:origin-left">
          <a href="#education" className="menu-item">
            Education
          </a>
        </li>
        <li className="relative font-semibold text-md mb-5 sm:mb-0 after:contents-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-right hover:after:origin-left">
          <a href="#certification" className="menu-item">
            Certification
          </a>
        </li>
        <li className="relative font-semibold text-md mb-5 sm:mb-0 after:contents-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-right hover:after:origin-left">
          <a href="#contact" className="menu-item">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
