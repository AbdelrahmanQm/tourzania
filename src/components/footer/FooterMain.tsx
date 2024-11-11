import React from "react";
import footerData from "../appData/footerData";
import Link from "next/link";
const FooterMain: React.FC = () => {
  return (
    <div className="bg-gray">
      <div className="max-w-[1250px] px-4 mx-auto ">
        <div className="grid grid-cols-2 gap-4 py-4">
          {footerData.linkGroups.map((group, index) => {
            return (
              <div key={index} className="">
                <h2 className="cursor-default font-bold text-white text-lg">
                  {group.linkGroupName}
                </h2>
                <div className="flex flex-col">
                  {group.links.map((link, index) => {
                    return (
                      <Link
                        href={link.link}
                        key={index}
                        className="cursor-pointer text-graybg "
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
