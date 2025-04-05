"use client";

import React, { useState } from "react";
import RoomCard from "./_components/roomCard";
import { Room_data } from "@/constant";
import Modal from "@/components/ui/modal";
import BookingModal from "@/components/ui/bookingModal";

const Rooms = () => {
  const [open, setOpen] = useState(false);


  return (
    <div >
      <div
     
        id="rooms"
        className="pt-[20px] pb-[50px] md:py-[50px] relative md:px-0 px-4 lg:px-4"
      >
        <div>
          <h2 className="text-4xl text-center font-bold text-primary">
            Our Rooms & Villas
          </h2>

          <div className="pt-[30px] flex-wrap flex  justify-center  gap-6 lg:gap-10">
            {Room_data.map((item, i) => (
              <RoomCard
                i={i}
                inView={true}
                setOpen={setOpen}
                key={i}
                {...item}
              />
            ))}
          </div>
        </div>
        <Modal width="475px" setOpen={setOpen} isOpen={open}>
          <BookingModal setOpen={setOpen} open={open} />
        </Modal>
      </div>
    </div>
  );
};

export default Rooms;
