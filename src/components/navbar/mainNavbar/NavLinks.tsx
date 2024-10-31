import React from "react";
import navLinksData from "@/components/appData/navLinksData";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  return (
    <ul className="flex justify-evenly items-center">
      {navLinksData.map((link, index) => {
        return <NavLink key={index} linkData={link} />;
      })}
    </ul>
  );
};

export default NavLinks;
