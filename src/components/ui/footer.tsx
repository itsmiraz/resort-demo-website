"use client";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstaIcon,
  LinkedInIcon,
  YouTubeIcon,
  XIcon,
} from "@/assets/icons/index";
import { useGlobalContext } from "../context/globalContext";
import { motion } from "framer-motion";
const Footer = () => {
  const { isAnimate } = useGlobalContext();

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
  const socialLinks = [
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
    },
    {
      label: "Instagram",
      icon: <InstaIcon />,
      link: "https://www.instagram.com",
    },
    {
      label: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com",
    },
    {
      label: "YouTube",
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
    {
      label: "X (Twitter)",
      icon: <XIcon />,
      link: "https://www.twitter.com",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimate ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="py-14 space-y-10 px-10 bg-green-100 rounded-xl"
    >
      <div className="flex md:flex-row flex-col gap-8 justify-between items-center">
        <h2 className="text-xl font-medium">Resort Website</h2>

        <ul className="flex  flex-wrap justify-center inter-font text-[#434343] gap-x-8 items-center text-sm">
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center inter-font text-[#434343] gap-x-4 items-center text-sm">
          {socialLinks.map((item, i) => (
            <li key={i}>
              <Link aria-label={item.label} href={item.link}>
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="flex flex-wrap gap-5 items-center inter-font justify-center text-[#434343] gap-x-6  text-sm">
        <p> 2025 Resort Website. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
    </motion.div>
  );
};

export default Footer;
