import React from "react";
import MenuItem from "../menu-item";

const NavMenu = ({ items }) => {
  return (
    <div className="absolute right-0 top-10 z-10 flex w-36 flex-col space-y-2 rounded-lg bg-almost-white px-4 py-2 drop-shadow">
      {items.map(({ text, icon }) => (
        <MenuItem key={text} text={text} icon={icon} />
      ))}
    </div>
  );
};

export default NavMenu;
