import React from "react";
import { RightArrow } from "../assets/index.js";

function Certificate({ certId, title, certLink, image }) {
  return (
    <div className="border border-light-gray sm:w-[588px] text-center h-fit pb-5 sm:pb-0 sm:h-[630px] bg-gray-white">
      <img src={image} alt={title} />
      <h1 className="text-lg sm:text-lg font-bold my-5 sm:w-[390px] text-center m-auto">
        {title}
      </h1>
      <p className="mb-5 text-sm sm:text-md">CREDENTIAL ID: {certId}</p>
      {certLink && (
        <a href={certLink} className="group text-sm sm:text-md" target="_blank">
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
