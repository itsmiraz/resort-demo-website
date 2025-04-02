/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RoomImg1 from "@/assets/images/room1.png";
import RoomImg2 from "@/assets/images/room2.webp";
import RoomImg3 from "@/assets/images/room3.jpg";
// import RoomImg4 from "@/assets/images/room4.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

import BedIcon from "@/assets/icons/bed.svg";
import BathRoomicon from "@/assets/icons/bathroom.svg";
import GuestsIcon from "@/assets/icons/guests.svg";

const Rooms = () => {
  const Room_data = [
    {
      image: RoomImg1,
      title: "Luxury Deluxe ",
      rating: 4.5,
      price: "$150 -$250",
      beds: 2,
      guests: 2,
      bathrooms: 2,
    },
    {
      image: RoomImg2,
      title: "Ocean View Suite",
      rating: 4.8,
      price: "$300 - $450",
      beds: 1,
      guests: 2,
      bathrooms: 1,
    },
    {
      image: RoomImg3,
      title: "Presidential Suite",
      rating: 5.0,
      price: "$500 - $700",
      beds: 2,
      guests: 4,
      bathrooms: 3,
    },
    // {
    //   image: RoomImg4,
    //   title: "Standard Room",
    //   rating: 3.8,
    //   price: "$100 - $150",
    //   beds: 1,
    //   guests: 2,
    //   bathrooms: 1,
    // },
  ];

  return (
    <div className="py-[50px] px-4">
      <h2 className="text-4xl text-center font-bold text-primary">Our Rooms</h2>

      <div className="pt-[30px] flex-wrap flex justify-between gap-10">
        {Room_data.map((item, i) => (
          <RoomCard key={i} {...item} />
        ))}
      </div>
      <p className="text-lg font-medium text-primary gap-x-3 pt-7 cursor-pointer justify-center  flex items-center">
        View More <ArrowRight />
      </p>
    </div>
  );
};

export default Rooms;

const RoomCard = ({
  image,
  bathrooms,
  beds,
  guests,
  price,
  rating,
  title,
}: {
  image: any;
  title: string;
  rating: number;
  price: string;
  beds: number;
  guests: number;
  bathrooms: number;
}) => {
  return (
    <div className="w-[375px] bg-[#E9FFEE] border border-[#000000]/20 space-y-[17px] rounded-2xl p-5 ">
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
        <p className="bg-[#FFF0D8]   items-center w-fit rounded-full px-3 py-1 text-[#FF9D00] flex gap-x-2 font-medium inter-font">
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
          className="bg-transparent hover:bg-[#29DB0E]/10"
          size={"lg"}
          variant={"outline"}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};
