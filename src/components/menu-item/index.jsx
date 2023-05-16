import React from "react";

const MenuItem = ({ text, icon }) => {
  return (
    <div className="flex w-full space-x-4">
      {icon}
      <span className=" cursor-pointer text-medium-gray hover:text-almost-black">
        {text}
      </span>
    </div>
  );
};

export default MenuItem;
