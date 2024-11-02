import React from "react";
import Image from "next/image";
import Link from "next/link";
import mainData from "@/components/appData/mainData";
import logo from "../../../../public/img/logo-h_70.png";
import { MenuIcon } from "../../../../public/svgs/page";

const NavLogo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={logo}
          alt={mainData.imgAlt.mainLogo}
          height="70"
          width="401"
          className="h-[40px] min-w-[229px] w-auto"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
