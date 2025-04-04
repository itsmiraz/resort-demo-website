"use client"

import { Variants ,motion} from 'framer-motion';
import React, { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer';


const AnimatedText = ({children}:{children: ReactNode}) => {
  const words = (children as string)?.split(" ").map((word, i) => ({ id: i, value: word }));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const pullupVariant: Variants = {
    initial: { y: 100 },
    animate: (i: number) => ({
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };


  return (
    <div
          ref={ref}
          className="text-[35px] leading-[110%] md:text-[42px]  overflow-hidden text-primary font-bold inline-flex flex-wrap justify-start"
        >
          {words.map(({ id, value }, i) => (
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
          ))}
        </div>
  )
}

export default AnimatedText