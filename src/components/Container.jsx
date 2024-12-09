import React from "react";

function Container({ children }) {
  return (
    <div className="ml-[14px] mr-[14px] sm:w-[1236px] sm:m-auto">
      {children}
    </div>
  );
}

export default Container;
