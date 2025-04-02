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

const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover rounded-[40px]  bg-center bg-no-repeat  w-full py-[80px] px-[70px]"
        style={{ backgroundImage: `url(${HeroCover.src})` }}
      >
        <h1 className="text-5xl mb-[20px] font-bold text-white">
          Your Dream Vacation <br /> Starts Right Here
        </h1>
        <p className="text-white mb-[36px] font-medium text-2xl ">
          Experience the perfect blend of relaxation <br />
          and adventure.
        </p>
        <SearchFilter />
      </div>
    </div>
  );
};

export default Hero;


const SearchFilter = () => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [selectedType, setSelectedType] = useState<string>("Room");
  return (
    <div className="bg-white justify-between w-full py-[26px] px-[40px] rounded-[20px] w-fit ease-in-out transition-all duration-300 flex  items-center ">
      {/* Check-in Date Selector */}
      <DateSelector
        title="Check In"
        date={checkInDate}
        setDate={setCheckInDate}
      />

      {/* Check-out Date Selector */}
      <DateSelector
        title="Check Out"
        date={checkOutDate}
        setDate={setCheckOutDate}
      />

      {/* Select Amount of guests */}
      <GuestSelector guests={guests} setGuests={setGuests} />

      {/* Select Room or Villa */}
      <SelectType
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {/* Main Buton */}
      <Button variant={"primary"} size={"lg"}>
        Check Availability <Search />
      </Button>
    </div>
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
      <p className="text-sm font-medium text-primary">{title}</p>
      <Popover>
        <PopoverTrigger asChild>
          <p className="cursor-pointer whitespace-nowrap text-lg font-medium text-primary border-[#06402A] flex gap-x-[14px] border-b-2 ">
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <ChevronDown />
          </p>
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
    <div className="border-[#06402A] border-b-2 ">
      <p className="text-sm font-medium text-primary">Guests</p>
      <div className="flex  h-8 justify-center items-center gap-x-4">
        <button
          className="cursor-pointer"
          onClick={() => guests > 1 && setGuests((prev) => prev - 1)}
        >
          <MinusIcon />
        </button>
        <p className="text-xl font-medium">{guests}</p>

        <button
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
      <p className="text-sm whitespace-nowrap font-medium text-primary">Select Type</p>

      {/* Custom dropdown */}
      <div className="relative ">
        <button
          onClick={toggleDropdown}
          className="w-full h-9 px-1 gap-x-4 bg-white border-b-2 border-[#06402A] flex items-center justify-start text-xl font-medium text-primary"
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
