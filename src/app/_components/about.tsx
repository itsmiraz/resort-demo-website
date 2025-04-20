import { Button } from "@/components/ui/button";
import React from "react";
import Aboutimage from "@/assets/images/about.webp";
import Image from "next/image";
import PlayIcon from "@/assets/icons/play.svg";
import AnimatedText from "@/components/ui/animatedText";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} id="about" className="py-[50px] md:px-0 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 pb-6 gap-5 md:flex-row flex-col justify-between items-start">
        <p className="text-primary text-xs   py-2 font-medium">
          About Our Resort
        </p>
        <div>
          <AnimatedText>
            Delivering unforgettable experiences with world-class hospitality
            and premium services.
          </AnimatedText>
          {/* <h3 className="text-[32px] md:text-[42px] leading-[110%] font-bold text-primary pb-4">
            Delivering unforgettable <br  className="md:block hidden"/> experiences with world-class <br className="md:block hidden" />{" "}
            hospitality and premium services.
          </h3> */}
          <div className="mt-4">
            <Button size={'md'} variant={"outline"}>Book Now</Button>
          </div>
        </div>
      </div>
      <motion.div  
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 0.4,}}
      className="relative overflow-hidden  h-[200px] md:h-fit rounded-[30px]">
        <button
          aria-label="play-button"
          className="absolute z-20 cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <PlayIcon />
        </button>
        <Image
          className="w-full object-cover h-full blur"
          src={Aboutimage}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default About;
