import DiningImage from "@/assets/images/diningImage.webp";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const Dining = () => {
  return (
    <div className="flex justify-between items-center py-[50px]">
      <div className="space-y-[20px]">
        <h3 className="text-[42px] leading-[110%] font-bold text-primary">
          A Culinary Journey Like <br />
          No Other
        </h3>
        <p className="text-xl font-medium  text-[#303030]">
          Indulge in a world of exquisite flavors, from <br /> gourmet
          international dishes to locally inspired <br /> delicacies.{" "}
        </p>
        <Button variant={'primary'} size={'lg'} className="">
          Book Now <MoveUpRight />
        </Button>
      </div>
      <div>
        <Image src={DiningImage} alt="" />
      </div>
    </div>
  );
};

export default Dining;
