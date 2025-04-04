/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import BedIcon from "@/assets/icons/bed.svg";
import BathRoomicon from "@/assets/icons/bathroom.svg";
import GuestsIcon from "@/assets/icons/guests.svg";
const RoomCard = ({
    image,
    bathrooms,
    beds,
    guests,
    price,
    rating,
    title,
    inView,
    i,
    setOpen,
  }: {
    image: any;
    title: string;
    rating: number;
    price: string;
    beds: number;
    inView: boolean;
    i: number;
    guests: number;
    bathrooms: number;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: i * 0.2 }}
        className="w-full md:w-[320px]  lg:w-[375px] bg-[#f6fff8] border border-[#000000]/20 space-y-[17px] rounded-2xl p-5 "
      >
        <div className="h-[200px] group rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r z-30 from-transparent via-white/40 to-transparent scale-150 rotate-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-500 ease-in-out"></div>
          <Image
            src={image}
            alt=""
            className="object-cover hover:scale-110 ease-in-out transition-all duration-300 w-full h-full"
          />
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="text-2xl font-bold w-[220px] truncate ">{title}</h3>
          <p className="bg-[#fff1db]   items-center w-fit rounded-full px-3 py-1 text-[#FF9D00] flex gap-x-2 font-medium inter-font">
            <Star size={18} /> {rating}
          </p>
        </div>
        <h4 className="text-lg font-semibold inter-font">
          {price} <span className="text-sm text-gray-500">/night</span>
        </h4>
  
        <div className="flex gap-x-4">
          <p className="text-xs inter-font flex gap-x-2 items-center ">
            <BedIcon /> {beds} Beds
          </p>
          <p className="text-xs inter-font  flex gap-x-2 items-center">
            {" "}
            <GuestsIcon /> {guests} Gusts
          </p>
          <p className="text-xs inter-font  flex gap-x-2 items-center">
            <BathRoomicon /> {bathrooms} Bathrooms
          </p>
        </div>
  
        <div className="flex justify-between items-center">
          <button className="font-medium cursor-pointer text-lg">
            View Details
          </button>
          <Button
            onClick={() => setOpen(true)}
            className="bg-transparent hover:bg-[#29DB0E]/10"
            size={"lg"}
            variant={"outline"}
          >
            Book Now
          </Button>
        </div>
      </motion.div>
    );
  };
  
  export default RoomCard