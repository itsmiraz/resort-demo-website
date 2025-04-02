import Image from "next/image";
import React from "react";
import ExpertisePillImage1 from "@/assets/images/expertise-pill-1.png";
import ExpertisePillImage2 from "@/assets/images/expertise-pill-2.png";
const Expertise = () => {
  return (
    <div className="py-20">
      <h2 className="text-[28px] md:text-[38px] align-middle  items-center text-primary font-bold text-center">
          {" "}
          Savor a world of     <span className="inline-flex md:hidden  px-4 translate-y-2 items-center justify-center">
          <Image className="md:w-[140px] w-[100px]" src={ExpertisePillImage1} alt="" />
        </span> flavors  crafted by expert{" "}
        <span className="md:inline-flex hidden  px-4 translate-y-2 items-center justify-center">
          <Image className="md:w-[140px] w-[100px]" src={ExpertisePillImage1} alt="" />
        </span>{" "}
        <br className="md:block hidden" />
        chefs, featuring fresh local ingredients and gourmet <br className="md:block hidden" />{" "}
        <span className="inline-flex items-center pr-4 justify-center translate-y-3">
          {" "}
          <Image className="md:w-[140px] w-[100px]" src={ExpertisePillImage2} alt="" />
        </span>{" "}
        international cuisine.
      </h2>
    </div>
  );
};

export default Expertise;
