import React from "react";

const borderStyles =
  "border-2 border-almost-black  hover:text-white hover:bg-black";
const filledStyles =
  "text-white bg-black font-bold py-4 px-14 mx-0 hover:text-almost-black hover:bg-transparent border-2 border-almost-black";
const Button = ({ children, hasBorder = false, isFilled = false }) => {
  return (
    <button
      className={`rounded-2xl px-5 py-2 text-medium-gray transition-colors duration-200 ease-in ${
        hasBorder && borderStyles
      } ${isFilled && filledStyles} ${
        (isFilled || hasBorder) === false && "hover:text-almost-black"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
