import { Button } from "@/components/ui/button";
import React from "react";
import Aboutimage from "@/assets/images/about.webp";
import Image from "next/image";
import PlayIcon from "@/assets/icons/play.svg";
const About = () => {
  return (
    <div className="py-[50px]">
      <div className="flex pb-6 justify-between items-start">
        <p className="text-primary border rounded-full px-4 py-2 font-medium">About Our Resort</p>
        <div>
          <h3 className="text-[42px] leading-[110%] font-bold text-primary pb-4">
            Delivering unforgettable <br /> experiences with world-class <br />{" "}
            hospitality and premium services.
          </h3>
          <Button variant={"outline"}>Book Now</Button>
        </div>
      </div>
      <div className="relative overflow-hidden  rounded-[30px]">
        <button className="absolute z-20 cursor-pointer top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4">
          <PlayIcon />
        </button>
        <Image
          className="w-full object-cover h-full blur"
          src={Aboutimage}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
