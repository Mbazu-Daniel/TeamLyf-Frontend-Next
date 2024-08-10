"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import logoIcon from "../../public/assets/lyfBlueLogo.svg";

interface BaseFormCardProps {
  heading: string;
  title: string;
  children: ReactNode
}

const BaseFormCard: React.FC<BaseFormCardProps> = ({ heading, title, children }) => {
  return (
    <div className="bg-[#ffffff] p-8 text-xs min-h-[70vh]">
      <h2 className="font-bold text-2xl">{heading}</h2>
      <div className="flex pb-8">
        <p>{title}</p>
        <Image src={logoIcon} alt="logo icon" width={70} height={40} />
      </div>
      {children}
    </div>
  );
};

export default BaseFormCard;
