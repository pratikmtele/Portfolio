import React from "react";
import { Container } from "./index.js";

function Footer() {
  return (
    <Container>
      <footer className="mt-14 sm:mt-20 h-10 sm:h-20 sm:flex sm:justify-between sm:items-center">
        <p className="text-sm font-light text-center">
          Copyright © 2024 by Pratik Tele
        </p>
        <ul className="gap-6 hidden sm:flex">
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
      </footer>
    </Container>
  );
}

export default Footer;
