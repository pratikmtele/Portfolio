import React, { useState } from "react";
import { Container } from "./index.js";
import { Menu, Close } from "../assets/index.js";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpened] = useState(false);

  const onClickHandle = () => {
    setIsNavbarOpened((prev) => !prev);
  };

  return (
    <Container>
      <header className="flex justify-between h-20 items-center sm:mt-6">
        <h1 className="text-lg font-bold cursor-pointer sm:text-xl">
          <em>{"< React"}</em>
          <span></span>
          <span className=" gradient-color text-transparent">
            <em>{"Mode />"}</em>
          </span>
        </h1>
        <img
          src={isNavbarOpen ? Close : Menu}
          alt="Menu"
          className="w-6 block sm:hidden cursor-pointer"
          onClick={onClickHandle}
        />
        <ul
          className={`block absolute h-[270px] z-50 top-20 left-0 ${
            isNavbarOpen ? "translate-x-0" : "-translate-x-[500px]"
          } sm:translate-x-0 text-center bg-gray-white sm:bg-white w-full sm:h-auto sm:static sm:w-fit sm:gap-6 sm:flex transition-all ease-in-out duration-500`}
          onClick={onClickHandle}
        >
          <li className="font-semibold text-md hover:text-gray mb-5 sm:mb-0 mt-5 sm:mt-0">
            <a href="#about">About</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray mb-5 sm:mb-0">
            <a href="#projects">Projects</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray mb-5 sm:mb-0">
            <a href="#education">Education</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray mb-5 sm:mb-0">
            <a href="#certification">Certification</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray mb-5 sm:mb-0">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default Navbar;
