"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  const menuVariants = {
    hidden: { scale: 0, opacity: 0, originX: 1, originY: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.3 },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
   
  };

  return (
    <nav className="flex bg-white pt-4  transition-all ease-in-out duration-300 z-40 md:relative sticky top-0 pb-4 justify-between items-center">
      <div className="relative  z-50">
        <h2 className="text-2xl font-bold text-[#06402A] ">Resort Website</h2>
      </div>
      <ul className="hidden md:flex  justify-center inter-font text-[#434343] gap-x-8 items-center text-sm">
        {navLinks.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="relative z-50">
        <div className="flex items-center gap-x-4">
          <Button className="md:block hidden" variant={"primary"}>
            Contact
          </Button>
          <button
            className="md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="fixed inset-0 bg-white z-30 flex flex-col items-center justify-center space-y-6 text-xl font-medium text-[#06402A] md:hidden"
        >
          {navLinks.map((item, i) => (
            <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={linkVariants}>
              <Link href={item.link} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div custom={navLinks.length} initial="hidden" animate="visible" variants={linkVariants}>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Contact
            </Button>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
