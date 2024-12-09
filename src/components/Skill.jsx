import React from "react";

function Skill({ name, icon }) {
  return (
    <div className="bg-gray-white rounded-md flex items-center w-[110px] h-[50px] gap-2 sm:w-[223px] sm:h-[78px] sm:gap-5 sm:p-3">
      <img
        src={icon}
        alt={name}
        className="w-[24px] sm:w-[61px] sm:h-[54px] ml-2 sm:ml-0"
      />
      <p className="text-sm sm:text-md">{name}</p>
    </div>
  );
}

export default Skill;
