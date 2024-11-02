import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavLogin from "./NavLogin";
import MenuBtn from "./MenuBtn";

const NavMain: React.FC = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-1 pt-6 relative">
      <nav className="flex justify-between items-center lg:gap-24 sm:gap-0">
        <div>
          <NavLogo />
        </div>
        <div className="grow">
          <NavLinks />
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className="sm:block lg:hidden">
            <MenuBtn />
          </div>
          <NavLogin />
        </div>
      </nav>
    </div>
  );
};

export default NavMain;
