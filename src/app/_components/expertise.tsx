import Image from "next/image";
import React from "react";
import ExpertisePillImage1 from "@/assets/images/expertise-pill-1.png";
import ExpertisePillImage2 from "@/assets/images/expertise-pill-2.png";
const Expertise = () => {
  return (
    <div className="py-20">
      <h2 className="text-[38px]  align-middle  items-center text-primary font-bold text-center">
        <span className="inline-flex items-center justify-center">
          {" "}
          Savor a world of flavors crafted by expert{" "}
        </span>
        <span className="inline-flex px-4 translate-y-2 items-center justify-center">
          <Image className="" src={ExpertisePillImage1} alt="" />
        </span>{" "}
        <br />
        chefs, featuring fresh local ingredients and gourmet <br />{" "}
        <span className="inline-flex items-center justify-center translate-y-3">
          {" "}
          <Image src={ExpertisePillImage2} alt="" />
        </span>{" "}
        international cuisine.
      </h2>
    </div>
  );
};

export default Expertise;
