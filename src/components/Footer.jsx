import React from "react";
import { Container } from "./index.js";

function Footer() {
  return (
    <Container>
      <footer className="mt-20 h-20 flex justify-between items-center">
        <p className="text-sm font-light">Copyright © 2024 by Pratik Tele</p>
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
      </footer>
    </Container>
  );
}

export default Footer;
