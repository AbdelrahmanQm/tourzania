import React from "react";
import navLinksData from "@/components/appData/navLinksData";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  return (
    <ul className="flex justify-evenly items-center lg:flex-row sm:flex-col sm:absolute lg:relative sm:w-full sm:left-0 lg:w-auto sm:bg-gray lg:bg-white sm:top-[140%] ">
      {navLinksData.map((link, index) => {
        return <NavLink key={index} linkData={link} />;
      })}
    </ul>
  );
};

export default NavLinks;
