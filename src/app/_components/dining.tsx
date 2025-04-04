import DiningImage from "@/assets/images/diningImage.webp";
import { Button } from "@/components/ui/button";
import { Variants, motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const text = " A Culinary Journey Like  No Other";

const pullupVariant: Variants = {
  initial: { y: 100 },
  animate: (i: number) => ({
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Dining = () => {
  const words = text.split(" ").map((word, i) => ({ id: i, value: word }));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="flex px-4 gap-10 md:px-0 md:flex-row flex-col-reverse justify-between items-center py-[50px]">
      <div className="space-y-[20px] text-center md:text-start">
        <div
          ref={ref}
          className="text-[42px] leading-[110%] md:text-[42px]  overflow-hidden text-primary font-bold inline-flex flex-wrap justify-center md:justify-start"
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
        {/* <h3 className="font-bold text-primary">
          A Culinary Journey Like <br className="md:block hidden" />
          No Other
        </h3> */}
        <p className="text-xl font-medium  text-[#303030]">
          Indulge in a world of exquisite flavors, from{" "}
          <br className="md:block hidden" /> gourmet international dishes to
          locally inspired <br className="md:block hidden" /> delicacies.{" "}
        </p>
        <Button variant={"primary"} size={"lg"} className="group">
          Book Now{" "}
          <MoveUpRight className="rotate-0 group-hover:rotate-45 transition-all duration-200 ease-in-out" />
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Image src={DiningImage} alt="" />
      </motion.div>
    </div>
  );
};

export default Dining;
