import React from "react";

function Skill({ name, icon }) {
  return (
    <div className="bg-gray-white rounded-md flex w-[223px] h-[78px] items-center gap-5 p-3">
      <img src={icon} alt={name} className="w-[61px] h-[54px]" />
      <p className="text-md">{name}</p>
    </div>
  );
}

export default Skill;
