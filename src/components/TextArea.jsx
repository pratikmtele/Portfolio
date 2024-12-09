import React from "react";

function TextArea({ value, onChange, name, id, label, type }) {
  return (
    <div className=" relative group sm:mt-5">
      <label
        htmlFor={id}
        className={`absolute text-gray ${
          value != ""
            ? "text-xm -top-[10px] left-2 text-black"
            : "top-[6px] left-2"
        } bg-white px-[2px] transition-all ease-in-out duration-300 group-focus-within:text-xm group-focus-within:-top-[10px] group-focus-within:text-black`}
      >
        {label}
      </label>
      <textarea
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        className="border border-light-gray w-full text-sm min-h-[100px] pl-2 pt-2 rounded-md"
      />
    </div>
  );
}

export default TextArea;
