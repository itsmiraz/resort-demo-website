/* eslint-disable react/no-unescaped-entities */
"use client";
import React, {useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

import { Swiper as SwiperType } from "swiper";

const testimonials = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum .",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    company: "Abc, Resdium Digital",
  },
  {
    name: "Jane Smith",
    text: "Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    company: "XYZ, Tech Solutions",
  },
  {
    name: "Alice Johnson",
    text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    company: "Marketing, Creative Agency",
  },
  {
    name: "Robert Brown",
    text: "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    company: "CEO, Innovate Inc.",
  },
  {
    name: "Michael Lee",
    text: "Sed porttitor lectus nibh. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit.",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    company: "Co-Founder, NextGen Labs",
  },
];
const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

const handleLeftClick = () => {
  swiperRef.current?.slidePrev(); // ✅ No .swiper needed
};

const handleRightClick = () => {
  swiperRef.current?.slideNext(); // ✅ No .swiper needed
};
  return (
    <div className="py-[50px] pl-4 md:pl-0">
      <h2 className="text-4xl  text-center font-bold text-primary">
        Customer testimonials
      </h2>

      <div className="pt-[30px]">
        <Swiper
       onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          navigation={{
            nextEl: ".right-arrow",
            prevEl: ".left-arrow",
          }}
          modules={[Pagination, Navigation,Autoplay]
            
          }
          autoplay
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },

            1600: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="">
              <TestimonialsCard key={index} {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-5 justify-center md:justify-end mt-5">
          <button
            onClick={() => handleLeftClick()}
            className="size-[40px] opacity-80 cursor-pointer border-2 text-primary rounded-full border-primary flex justify-center items-center "
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => handleRightClick()}
            className="size-[40px] opacity-80 cursor-pointer border-2 text-primary rounded-full border-primary flex justify-center items-center "
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonialsCard = ({
  name,
  text,
  rating,
  image,
  company,
}: {
  name: string;
  text: string;
  rating: number;
  image: string;
  company: string;
}) => {
  return (
    <div className="w-[350px] md:w-[450px] bg-white h-[230px] md:h-[282px] flex flex-col justify-between space-y-4 rounded-[20px] border border-black/20 p-[24px] md:p-[32px] ">
      <div className="flex  text-orange-400 gap-x-2">
        {Array.from({ length: rating }, (_, i) => (
          <Star fill="#FF9D00" size={16} key={i} />
        ))}
      </div>
      <div>
        <p>"{text}"</p>
      </div>

      <div className="flex gap-4 items-center">
        <Image
          src={image}
          className="rounded-full  overflow-hidden"
          alt=" "
          height={56}
          width={56}
        />
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-sm ">{company}</p>
        </div>
      </div>
    </div>
  );
};
