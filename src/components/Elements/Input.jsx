import React from "react";

function Input(props) {
  const {
    id,
    backgroundColor = "bg-white",
    border = "border-gray-03",
    ...rest
  } = props;

  return (
    <input
      id={id}
      {...rest}
      className={`
        w-full
        py-3
        pl-4
        text-sm
        rounded-md
        border
        ${border}
        ${backgroundColor}
        text-gray-01
        focus:outline-none
        focus:border-black
      `}
    />
  );
}

export default Input;
