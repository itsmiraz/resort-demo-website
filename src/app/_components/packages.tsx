"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import VillaImage from "@/assets/images/pacakge-vila.jpg";
import RoomImage from "@/assets/images/pacakge-rooms.png";
import Image from "next/image";
import BedIcon from "@/assets/icons/bed.svg";
import BathRoomicon from "@/assets/icons/bathroom.svg";
import GuestsIcon from "@/assets/icons/guests.svg";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import BookingModal from "@/components/ui/bookingModal";
const Packages = () => {
  const [open, setOpen] = useState(false);

  const packagesData = [
    {
      image: RoomImage,
      title: "Super Deluxe Room",
      stay: "2 Days 3 Night",
      price: "$1250",
      offerPrice: "$999",
      beds: 1,
      guests: 2,
      bathrooms: 1,
    },
    {
      image: VillaImage,
      title: "Luxury Villa Stay",
      stay: "3 Days 5 Night",
      price: "$1950",
      offerPrice: "$1499",
      beds: 1,
      guests: 2,
      bathrooms: 1,
    },
  ];

  return (
    <div className="bg-white py-[50px] rounded-[40px] ">
      <div className="text-center space-y-[10px]">
        <h1 className="text-[42px] leading-[110%] md:text-[42px]  overflow-hidden text-primary font-bold inline-flex">
          Special Packages
        </h1>
        <p className="text-xl font-medium  text-[#303030]">
          Explore our limited time Eid Special Packages.
        </p>
      </div>
      <div className="max-w-[936px] mx-auto mt-[30px] space-y-[30px]">
        {packagesData.map((item, i) => (
          <PackageCard
            setOpen={setOpen}
            inView={true}
            i={i}
            key={i}
            {...item}
          />
        ))}
      </div>
      <Modal width="475px" setOpen={setOpen} isOpen={open}>
        <BookingModal setOpen={setOpen} open={open} />
      </Modal>
    </div>
  );
};

export default Packages;

const PackageCard = ({
  image,
  title,
  stay,
  price,
  offerPrice,
  beds,
  guests,
  setOpen,
  bathrooms,
}: {
  image: any;
  title: string;
  price: string;
  stay: string;
  offerPrice: string;
  beds: number;
  inView: boolean;
  i: number;
  guests: number;
  bathrooms: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="p-[16px] md:p-[20px] md:flex-row flex-col relative rounded-[30px] bg-[#f6fff8] border border-[000000]/20  flex gap-[20px] md:gap-[30px] w-full">
      <div className="w-full md:w-[419px] h-[200px] md:h-[251px] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt=""
          className="object-cover w-full h-full hover:scale-110 ease-in-out transition-all duration-300"
        />
      </div>
      <div className="space-y-[10px] flex flex-col justify-center">
        <div>
          <h2 className="text-[32px] font-bold text-primary">{title}</h2>
          <h3 className="text-2xl  font-semibold text-[#273127]">{stay}</h3>
        </div>
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
        <div>
          <h2 className="text-[#196E1C] font-bold text-[30px]">
            {offerPrice}{" "}
            <span className="line-through text-lg font-normal text-gray-700">
              {price}
            </span>
          </h2>
        </div>
        <div className="mt-4">
          <Button
            onClick={() => setOpen(true)}
            size={"md"}
            className="w-full md:w-fit"
            variant={"primary"}
          >
            Book Now
          </Button>
        </div>
      </div>
      <p className="px-[20px] rounded-full py-2 bg-primary text-white text-sm absolute top-2 right-2">
        {" "}
        Limited Time Offer
      </p>
    </div>
  );
};
