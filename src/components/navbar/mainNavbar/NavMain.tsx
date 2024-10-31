import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavLogin from "./NavLogin";

const NavMain: React.FC = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-1 pt-6 ">
      <nav className="flex justify-between items-center gap-24">
        <div>
          <NavLogo />
        </div>
        <div className="grow">
          <NavLinks />
        </div>
        <div>
          <NavLogin />
        </div>
      </nav>
    </div>
  );
};

export default NavMain;
