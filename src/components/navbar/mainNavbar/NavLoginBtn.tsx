import Link from "next/link";
import React from "react";

const NavLoginBtn: React.FC = () => {
  return (
    <Link
      className="uppercase bg-lightgreen px-8 py-4 rounded-md font-bold text-white text-sm hover:bg-green transition-all duration-500"
      href="/"
    >
      Login
    </Link>
  );
};

export default NavLoginBtn;
