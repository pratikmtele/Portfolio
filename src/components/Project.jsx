import React from "react";
import FoodImage from "../assets/foodorderingapp.png";

function Project({
  coverImage,
  title,
  description,
  isCodeSourced,
  githubLink,
  isSiteLive,
  siteLink,
  techs,
}) {
  return (
    <div className="sm:w-[385px] bg-white border border-light-gray h-fit rounded-md overflow-hidden">
      <img
        src={coverImage}
        alt="Project 1"
        className="w-full sm:h-[286px] object-cover"
      />
      <h1 className="font-bold text-lg ml-5 mt-4">{title}</h1>
      <div id="links" className="flex">
        {isCodeSourced && (
          <a
            href={githubLink}
            target="_blank"
            className="flex items-center px-2 max-w-36 h-[25px] mt-4 ml-5 border border-light-gray text-sm cursor-pointer"
          >
            <i class="fa-brands fa-github w-6"></i>
            <span className="text-[12px]">Code Source</span>
          </a>
        )}
        {isSiteLive && (
          <a
            href={siteLink}
            target="_blank"
            className="flex items-center px-2 max-w-36 h-[25px] mt-4 ml-5 border border-light-gray text-sm cursor-pointer"
          >
            <i class="fa-solid fa-arrow-up-right-from-square w-6"></i>
            <span className="text-[12px]">Check Live Site</span>
          </a>
        )}
      </div>
      <p className="mx-5 text-sm mt-4 text-gray">{description}</p>
      <div className="my-4 mx-5 flex flex-wrap gap-2">
        {techs.map((tech) => (
          <div
            key={tech}
            className="w-fit text-sm flex items-center bg-gray-white p-1"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
