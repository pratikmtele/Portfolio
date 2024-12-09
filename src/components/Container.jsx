import React from "react";

function Container({ children }) {
  return (
    <div className="pl-[10px] pr-[10px] sm:w-[1236px] sm:m-auto">
      {children}
    </div>
  );
}

export default Container;
