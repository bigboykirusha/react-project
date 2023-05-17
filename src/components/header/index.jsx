import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-menu.svg";
import { ReactComponent as MenuCloseIcon } from "../../images/icon-close-menu.svg";
import NavItem from "../nav-item";
import NavMenu from "../nav-menu";
import { COMPANY, FEATURES } from "./data";
import Button from "../button";
import MobileMenu from "../mobile-menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <header className="flex items-start pl-1 pr-6 md:items-center ">
      <Link to="/">
        <LogoIcon />
      </Link>
      <nav className="ml-16 hidden space-x-16 md:flex">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className="ml-auto hidden space-x-5 md:flex">
        <Button>Login</Button>
        <Button hasBorder={true}>Register</Button>
      </div>
      <div
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="z-50 ml-auto flex cursor-pointer md:hidden"
      >
        {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;
