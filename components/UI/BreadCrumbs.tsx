// /components/BreadCrumbs.tsx
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NextPage } from "next";
import React from "react";

const BreadCrumbs: NextPage<BreadCrumbProps> = ({
  homeElement = "Home",
  separator = <span className="w-[1px] h-4 flex bg-black/50 rotate-12" />,
  activeClasses = "!text-black",
  containerClasses = "flex items-end h-6 gap-2 text-Text-sm my-5",
  listClasses = "text-black/50 capitalize hover:text-black transition-colors duration-300",
  capitalizeLinks = true,
}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <section className="max-w-[1170px] mx-auto mb-20">
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default BreadCrumbs;
