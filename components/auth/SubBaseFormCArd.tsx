"use client";

import React, { ReactNode } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

type BaseFormCardProps = {
  crumb: string,
  title: string,
  summary: string,
  children: ReactNode;
}

const BaseFormCard: React.FC<BaseFormCardProps> = ({ crumb, title, summary, children }) => {
  return (
    <div className="bg-[#ffffff] p-8 text-xs min-h-[70vh]">
      <div className="flex pb-8 gap-1 items-center">
        <HiArrowLongLeft />
        <h2 className="text-xs">{crumb}</h2>
      </div>
      <h2 className="font-bold text-2xl py-4">{title}</h2>
      <h2 className="text-sm pb-8">{summary}</h2>
      {children}
    </div>
  );
};

export default BaseFormCard;
