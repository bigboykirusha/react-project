import React from "react";
import { ReactComponent as ArrowDownIcon } from "../../images/icon-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../images/icon-arrow-up.svg";
const NavItem = ({ text, children }) => {
  const [selected, setSelected] = React.useState("");

  return (
    <div className="relative">
      <div className="flex cursor-pointer items-center space-x-2">
        <span
          onClick={() => children && setSelected(text !== selected ? text : "")}
          className={`text-medium-gray transition-colors duration-200 ease-in hover:text-almost-black ${
            selected && "font-semibold text-almost-black"
          }`}
        >
          {text}
        </span>
        {children && selected !== text && <ArrowDownIcon />}
        {children && selected === text && <ArrowUpIcon />}
      </div>
      {selected && children}
    </div>
  );
};

export default NavItem;
