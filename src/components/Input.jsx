import React from "react";

function Input({
  value,
  onChange,
  name,
  id,
  label,
  type,
  className = "",
  labelClass = "",
}) {
  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`absolute text-gray dark:text-white/70 ${
          value != ""
            ? "text-xm -top-[10px] left-2 text-black dark:text-white"
            : "top-[6px] left-2"
        } bg-white dark:bg-transparent px-[2px] transition-all ease-in-out duration-300 group-focus-within:text-xm group-focus-within:-top-[10px] group-focus-within:text-black dark:group-focus-within:text-white ${labelClass} `}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        required
        value={value}
        onChange={onChange}
        name={name}
        className={`border border-light-gray dark:border-none dark:bg-white/10 dark:text-white w-full mb-5 sm:mb-0 sm:w-[283px] h-[38px] pl-2 rounded-md text-sm dark:outline-none ${className}`}
      />
    </div>
  );
}

export default Input;
