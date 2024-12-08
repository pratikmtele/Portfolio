import React from "react";
import { Container } from "./index.js";

const Navbar = () => {
  return (
    <Container>
      <header className="flex justify-between h-20 items-center mt-6">
        <h1 className="text-xl font-bold cursor-pointer">
          <span>
            <em>{"< React"}</em>
          </span>
          <span className=" gradient-color text-transparent">
            <em>{"Mode />"}</em>
          </span>
        </h1>
        <ul className="flex gap-6">
          <li className=" font-semibold text-md hover:text-gray">
            <a href="#about">About</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray">
            <a href="#projects">Projects</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray">
            <a href="#education">Education</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray">
            <a href="#certification">Certification</a>
          </li>
          <li className=" font-semibold text-md hover:text-gray">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default Navbar;
