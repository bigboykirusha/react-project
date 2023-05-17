import React from "react";
import NavItem from "../nav-item";
import { COMPANY, FEATURES } from "../header/data";
import MenuItem from "../menu-item";
import Button from "../button";

const MobileMenu = ({ isOpen = false }) => {
  return (
    <React.Fragment>
      <div
        className={`absolute left-0 right-0 top-0 z-10 min-h-full bg-almost-black opacity-50 ${
          isOpen ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute right-0 top-0 z-20 min-h-full w-2/3 justify-center bg-white ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <nav className="mx-5 my-20 w-full space-y-5 text-lg">
          <NavItem text="Features">
            <div className="flex flex-col space-y-5 pl-3 pt-4 ">
              {FEATURES.map(({ text, icon }) => (
                <MenuItem key={text} text={text} icon={icon} />
              ))}
            </div>
          </NavItem>
          <NavItem text="Company">
            <div className="flex flex-col space-y-5 pl-11 pt-4">
              {COMPANY.map(({ text, icon }) => (
                <MenuItem key={text} text={text} icon={icon} />
              ))}
            </div>
          </NavItem>
          <NavItem text="Careers" />
          <NavItem text="About" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-col space-y-5">
            <Button>Login</Button>
            <Button hasBorder={true}>Register</Button>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
