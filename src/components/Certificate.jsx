import React from "react";
import { MongoCert, RightArrow } from "../assets/index.js";

function Certificate({ certId, title, certLink, image }) {
  return (
    <div className="border border-light-gray w-[588px] text-center h-[630px] bg-gray-white">
      <img src={MongoCert} alt="MongoDB Developer path certificate" />
      <h1 className="text-lg font-bold my-5 w-[390px] text-center m-auto">
        {title}
      </h1>
      <p className="mb-5">CREDENTIAL ID: {certId}</p>
      {certLink && (
        <a href={certLink} className="group" target="_blank">
          View Certificate
          <img
            src={RightArrow}
            className="ml-2 w-5 transition ease-in-out duration-300 group-hover:translate-x-3 inline-block"
          />
        </a>
      )}
    </div>
  );
}

export default Certificate;
