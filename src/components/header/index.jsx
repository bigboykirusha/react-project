import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import NavItem from "../nav-item";
import NavMenu from "../nav-menu";
import { COMPANY, FEATURES } from "./data";
import Button from "../button";

const Header = () => {
  return (
    <header className="flex items-center">
      <LogoIcon />
      <nav className="ml-12 flex space-x-12">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className="ml-auto flex space-x-5">
        <Button>Login</Button>
        <Button hasBorder={true}>Register</Button>
      </div>
    </header>
  );
};

export default Header;
