import FitnessIcon from "@/assets/icons/gym.svg";
import AcitivityIcon from "@/assets/icons/activity.svg";
import DiningIcon from "@/assets/icons/dining.svg";
import InternetIcon from "@/assets/icons/internet.svg";

import FacilityImage from "@/assets/images/facility.png";
import Image from "next/image";
import PlayIcon from "@/assets/icons/play.svg";

const Facilities = () => {
  const amenities_data = [
    {
      title: "Fitness & Wellness",
      icon: <FitnessIcon />,
      description:
        "Stay active and rejuvenate with state-of-the-art fitness centers, relaxing spa treatments, and wellness programs tailored to your needs.",
    },
    {
      title: "Outdoor Activities",
      icon: <AcitivityIcon />,

      description:
        "Experience the thrill of adventure with hiking, cycling, water sports, and guided nature excursions, perfect for outdoor enthusiasts.",
    },
    {
      title: "Dining & Lounges",
      icon: <DiningIcon />,

      description:
        "Indulge in a variety of culinary delights, from gourmet dining to casual lounges, offering exquisite flavors and a welcoming ambiance.",
    },
    {
      title: "Free High-Speed WiFi",
      icon: <InternetIcon />,

      description:
        "Stay connected with seamless, high-speed internet access, ensuring uninterrupted work, entertainment, and communication during your stay.",
    },
  ];

  return (
    <div className="py-[50px]">
      <h2 className="text-primary font-bold text-center text-[36px]">
        Our Facilities
      </h2>

      <div className="grid place-items-center grid-cols-9 pt-[30px] gap-10">
        <div className="col-span-5 grid grid-cols-2 gap-8">
          {amenities_data.map((item, i) => (
            <div key={i}>
              <div className="w-[80px]">{item.icon}</div>
              <div>
                <h3 className="text-[28px] py-4 font-medium text-primary">{item.title}</h3>
                <p className="text-[16px] text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4 relative">
        <button className="absolute z-20 cursor-pointer top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4">
          <PlayIcon />
        </button>
          <Image className="relative" src={FacilityImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
