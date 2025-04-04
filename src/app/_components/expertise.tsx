import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ExpertisePillImage1 from "@/assets/images/expertise-pill-1.png";
import ExpertisePillImage2 from "@/assets/images/expertise-pill-2.png";

const text = `Savor a world of flavors crafted by expert [image] chefs, featuring fresh local ingredients and gourmet [image] international cuisine.`;

const pullupVariant: Variants = {
  initial: { y: 100 },
  animate: (i: number) => ({
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Expertise = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Split text, preserving [image] placeholders
  const words = text.split(" ").map((word, i) => ({ id: i, value: word }));

  return (
    <div className="py-20   md:px-20 lg:px-32 px-4 text-center">
      <div
        ref={ref}
        className="text-[28px] md:text-[38px] gap-x-1 overflow-hidden text-primary font-bold inline-flex flex-wrap  justify-center"
      >
        {words.map(({ id, value }, i) =>
          value === "[image]" ? (
            <span className="overflow-hidden h-[40px] md:h-[66px]" key={id}>
              {" "}
              <motion.span
                variants={pullupVariant}
                initial="initial"
                animate={inView ? "animate" : ""}
                custom={i}
                key={id}
                className="inline-flex items-center px-2"
              >
                <Image
                  className="md:w-[140px] w-[100px]"
                  src={i === 3 ? ExpertisePillImage2 : ExpertisePillImage1}
                  alt=""
                />
              </motion.span>
            </span>
          ) : (
            <span key={id} className="overflow-hidden h-[45px] md:h-[55px]">
              <motion.span
                key={id}
                className="inline-block   pr-2"
                variants={pullupVariant}
                initial="initial"
                animate={inView ? "animate" : ""}
                custom={i}
              >
                {value}
              </motion.span>
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Expertise;
