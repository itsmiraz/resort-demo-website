import React from "react";
import { Button } from "./button";
import Link from "next/link";

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
    <nav>
      <div>
        <h2>Resort Website</h2>
      </div>
      <ul>
        {navLinks.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <Button variant={"outline"}>Hello</Button>
    </nav>
  );
};

export default NavBar;
