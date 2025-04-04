"use client";

import React, { useState } from "react";
import HeroCover from "@/assets/images/hero-cover.webp";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDown, MinusIcon, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/components/context/globalContext";
import useIsMobile from "@/hooks/useIsMobile";
const Hero = () => {
  const { isAnimate, count } = useGlobalContext();
  const { isMobile } = useIsMobile();
  return (
    <div id="hero" className="pt-4 relative z-10 flex justify-center items-center md:h-[600px] h-[650px]">
      <motion.div
        initial={{
          width: isMobile ? "35%" : "15%",
          height: isMobile ? "20%" : "10%",
          opacity: 1,
          fill: "#06402A",
          backgroundColor: "#06402A",
        }}
        animate={{
          width: isAnimate ? "100%" : isMobile ? "35%" : "15%",
          height: isAnimate ? "100%" : isMobile ? "20%" : "10%",
          opacity: 1,
          backgroundImage: isAnimate ? `url(${HeroCover.src})` : "",
          fill: "#06402A",
          backgroundColor: "#06402A",
        }}
        transition={{ duration: 0.4 }}
        className="bg-cover relative flex flex-col justify-between  overflow-hidden rounded-[30px] md:rounded-[40px] bg-center bg-no-repeat w-full py-[40px] md:py-[80px] px-[36px] md:px-[70px]"
      >
        <div
          className={`${
            count === 100 && "hidden"
          } text-4xl w-full h-full flex  justify-center items-center font-bold text-white`}
        >
          <h2 className="p-5">{count}%</h2>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          className="flex flex-col justify-between h-full"
          animate={{
            opacity: isAnimate ? 1 : 0,
          }}
        >
          <div>
            <motion.h1
              initial={{
                // width: "0%",
                opacity: 0,
                scale: 0,
              }}
              animate={{
                // width: isAnimate ? "100%" : 0,
                opacity: isAnimate ? 1 : 0,
                scale: isAnimate ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-5xl relative z-20 mb-[20px] font-bold text-white"
            >
              Your Dream Vacation <br className="md:block hidden" /> Starts
              Right Here
            </motion.h1>
            <motion.p
              initial={{
                scale: 0,

                opacity: 0,
              }}
              animate={{
                scale: isAnimate ? 1 : 0,
                opacity: isAnimate ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-white relative z-20 mb-[36px] font-medium text-2xl"
            >
              Experience the perfect blend of relaxation{" "}
              <br className="md:block hidden" />
              and adventure.
            </motion.p>
          </div>
          <SearchFilter isAnimate={isAnimate} />

          <div className="w-full z-10 h-full bg-black/10 absolute top-0 left-0"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

const SearchFilter = ({ isAnimate }: { isAnimate: boolean }) => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [selectedType, setSelectedType] = useState<string>("Room");
  return (
    <motion.div
      initial={{
        width: "0px",
        height: "0%",
        opacity: 0,
      }}
      animate={{
        width: isAnimate ? "100%" : "0%",
        height: "40%",
        opacity: isAnimate ? 1 : 0,

        // scale:isAnimate ? 1 : 0,
      }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className={` ${
        isAnimate ? "px-[20px] md:px-[40px]" : "px-0"
      } bg-white z-20 relative justify-between w-full py-[20px] md:py-[26px] rounded-[20px] max-h-[170px] lg:max-h-[120px] md:w-full   ease-in-out gap-4 transition-all duration-300 grid grid-cols-2 md:flex flex-wrap  items-center`}
    >
      {/* Check-in Date Selector */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        className=""
        animate={{
          opacity: isAnimate ? 1 : 0,
          scale: isAnimate ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <DateSelector
          title="Check In"
          date={checkInDate}
          setDate={setCheckInDate}
        />
      </motion.div>

      {/* Check-out Date Selector */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: isAnimate ? 1 : 0,
          scale: isAnimate ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <DateSelector
          title="Check Out"
          date={checkOutDate}
          setDate={setCheckOutDate}
        />
      </motion.div>
      {/* Select Amount of guests */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: isAnimate ? 1 : 0,
          scale: isAnimate ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <GuestSelector guests={guests} setGuests={setGuests} />
      </motion.div>
      {/* Select Room or Villa */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: isAnimate ? 1 : 0,
          scale: isAnimate ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <SelectType
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </motion.div>
      {/* Main Buton */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: isAnimate ? 1 : 0,
          scale: isAnimate ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 1 }}
        className="col-span-2"
      >
        <Link href="#rooms">
          <Button variant={"primary"} className="w-full md:w-fit" size={"lg"}>
            Check Availability <Search />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const DateSelector = ({
  title,
  date,
  setDate,
}: {
  title: string;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) => {
  return (
    <div>
      <p className="text-xs md:text-sm font-medium text-primary">{title}</p>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap text-sm md:text-lg font-medium text-primary border-[#06402A] flex gap-x-[14px] border-b md:border-b-2"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <ChevronDown />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const GuestSelector = ({
  setGuests,
  guests,
}: {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="border-[#06402A] border-b md:border-b-2 ">
      <p className="text-xs md:text-sm font-medium text-primary">Guests</p>
      <div className="flex  h-8 justify-center items-center gap-x-4">
        <button
          aria-label="decrease"
          className="cursor-pointer"
          onClick={() => guests > 1 && setGuests((prev) => prev - 1)}
        >
          <MinusIcon />
        </button>
        <p className="text-sm md:text-xl font-medium">{guests}</p>

        <button
          aria-label="increase"
          className="cursor-pointer"
          onClick={() => setGuests((prev) => prev + 1)}
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

const SelectType = ({
  selectedType,
  setSelectedType,
}: {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (type: "Room" | "Villa") => {
    setSelectedType(type);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex flex-col relative">
      <p className="text-xs md:text-sm whitespace-nowrap font-medium text-primary">
        Select Type
      </p>

      {/* Custom dropdown */}
      <div className="relative ">
        <button
          onClick={toggleDropdown}
          className="w-full h-9 px-1 gap-x-4 bg-white border-b md:border-b-2 border-[#06402A] flex items-center justify-start text-[15px] md:text-xl font-medium text-primary"
        >
          {selectedType} {/* Display selected option */}
          <ChevronDown /> {/* Down arrow */}
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white border-2 border-[#06402A] rounded-md shadow-md z-10">
            <button
              onClick={() => handleSelect("Room")}
              className="w-full py-2 px-4 text-left text-primary hover:bg-gray-100"
            >
              Room
            </button>
            <button
              onClick={() => handleSelect("Villa")}
              className="w-full py-2 px-4 text-left text-primary hover:bg-gray-100"
            >
              Villa
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
