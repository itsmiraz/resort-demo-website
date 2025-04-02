/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Image1 from "@/assets/images/gallery/image1.png";
import Image2 from "@/assets/images/gallery/image (2).png";
import Image3 from "@/assets/images/gallery/image (3).png";
import Image4 from "@/assets/images/gallery/image (4).png";
import Image5 from "@/assets/images/gallery/image (5).png";
import Image6 from "@/assets/images/gallery/image (6).png";
import Image7 from "@/assets/images/gallery/image (7).png";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="py-[50px] px-4 md:px-0">
      <h2 className="text-4xl text-center font-bold text-primary">Gallery</h2>

      <div className="grid-cols-2 md:grid-cols-3 pt-[30px] grid gap-[16px] md:gap-[32px]">
        <div className=" space-y-[16px] md:space-y-[32px]">
          <ShinyImage className="w-full" src={Image1} alt="Image 1" />
          <ShinyImage className="w-full" src={Image2} alt="Image 2" />
        </div>

        <div className=" space-y-[16px] md:space-y-[32px]">
          <ShinyImage className="w-full" src={Image3} alt="Image 3" />
          <ShinyImage className="w-full" src={Image4} alt="Image 4" />
          <ShinyImage className="w-full" src={Image5} alt="Image 5" />
        </div>

        <div className="space-y-[32px] md:block hidden">
          <ShinyImage className="w-full" src={Image6} alt="Image 6" />
          <ShinyImage className="w-full" src={Image7} alt="Image 7" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
interface ShinyImageProps {
  src: any;
  alt: string;
  className?: string;
}

const ShinyImage: React.FC<ShinyImageProps> = ({ src, alt, className }) => {
  return (
    <div className={`relative  rounded-[10px] md:rounded-[20px] cursor-pointer overflow-hidden group ${className}`}>
      {/* Image */}
      <Image className="w-full hover:scale-110 transition-all ease-in-out duration-300" src={src} alt={alt} />

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 transform scale-150 skew-x-[-20deg] group-hover:translate-x-full" />
    </div>
  );
};
