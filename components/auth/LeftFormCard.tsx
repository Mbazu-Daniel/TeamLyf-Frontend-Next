"use client";

import logoIcon from "../../public/assets/lyfBlueLogo.svg";
import productBag from "../../public/assets/images/Productivity3D.png";
import Image from "next/image";

interface LeftFormCardProps {
  title: string,
  message: string
}

const LeftFormCard: React.FC<LeftFormCardProps> = ({ title, message }) => {  
  return (
    <div className="left-pane bg-[url('/assets/images/authBackground.png')] bg-no-repeat bg-cover pt-8 hidden md:block">
      <Image src={logoIcon} alt="logo icon" className="ml-8 mt-8" />
      <div className="innerWrap hidden md:flex flex-col items-center px-16 ">
        <Image src={productBag} alt="productivity logo" width={450} height={200} className="mt-4" />
        <h3 className="font-bold text-[40px]">{title}</h3>
        <p className="text-2xl text-center">
          <span className="font-bold">Teamlyf –</span>{message}
        </p>
      </div>
    </div>
  );
};

export default LeftFormCard;
