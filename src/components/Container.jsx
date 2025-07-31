import React from "react";

function Container({ children }) {
  return (
    <div className="pl-[10px] pr-[10px] md:pl-[20px] md:pr-[20px] lg:m-auto lg:w-[1236px] dark:bg-black">
      {children}
    </div>
  );
}

export default Container;
