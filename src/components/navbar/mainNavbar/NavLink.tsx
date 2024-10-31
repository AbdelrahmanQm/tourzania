import Link from "next/link";
import React from "react";

type linkProps = {
  linkData: {
    linkName: string;
    linkHref: string;
    subLinks?: { subLinkName: string; subLinkHref: string }[];
  };
};

const NavLink: React.FC<linkProps> = ({ linkData }) => {
  return (
    <li className="relative group">
      <Link
        className="text-gray hover:text-green transition-all duration-500 text-lg font-semibold"
        href={linkData.linkName}
      >
        {linkData.linkName}
      </Link>
      {linkData.subLinks && (
        <ul className="absolute  group-hover:flex bg-gray text-white flex-col left-[50%] translate-x-[-50%] transition-all duration-500 opacity-0 group-hover:opacity-100">
          {linkData.subLinks.map((sublink, index) => {
            return (
              <li className="flex items-center" key={index}>
                <Link
                  className=" whitespace-nowrap hover:bg-lightgreen px-4 py-[.75rem] w-full text-center transition-all duration-500"
                  href={sublink.subLinkHref}
                >
                  {sublink.subLinkName}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
