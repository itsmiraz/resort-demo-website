import React from "react";
import Link from "next/link";
import { Button } from "./button";

const NavBar = () => {
  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/",
    },
    {
      label: "Rooms",
      link: "/",
    },
    {
      label: "Gallery",
      link: "/",
    },
  ];

  return (
    <nav className="flex pb-4 justify-between items-center">
      <div className="">
        <h2 className="text-2xl font-bold text-[#06402A] ">Resort Website</h2>
      </div>
      <ul className="flex justify-center inter-font text-[#434343] gap-x-8 items-center text-lg">
        {navLinks.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="relative z-50">
      
      <Button variant={'primary'}>Contact</Button>
      </div>
    </nav>
  );
};

export default NavBar;
