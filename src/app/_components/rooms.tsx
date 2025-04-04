"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

// import RoomImg4 from "@/assets/images/room4.jpg";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/ui/bookingModal";
import Modal from "@/components/ui/modal";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import RoomCard from "../rooms/_components/roomCard";
import { Room_data } from "@/constant";

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      id="rooms"
      className="py-[50px] relative md:px-0 px-4 lg:px-4"
    >
      <div>
        <h2 className="text-4xl text-center font-bold text-primary">
          Our Rooms
        </h2>

        <div className="pt-[30px] flex-wrap flex  justify-center  gap-6 lg:gap-10">
          {Room_data.slice(0, 3).map((item, i) => (
            <RoomCard
              i={i}
              inView={inView}
              setOpen={setOpen}
              key={i}
              {...item}
            />
          ))}
        </div>
        <Link href={"/rooms"}>
          <p className="text-lg font-medium text-primary gap-x-3 pt-7 cursor-pointer justify-center  flex items-center">
            View More <ArrowRight />
          </p>
        </Link>
      </div>
      <Modal width="475px" setOpen={setOpen} isOpen={open}>
        <BookingModal setOpen={setOpen} open={open} />
      </Modal>
    </div>
  );
};

export default Rooms;
