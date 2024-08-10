"use client";

import React from "react";

interface BaseBtnProps {
  btnTitle: string
}

const BaseBtn: React.FC<BaseBtnProps> = ({ btnTitle }) => {
  return (
    <div className="text-right mt-4">
      <button type="submit" className="py-4 px-8 rounded bg-[hsl(263,100%,43%)] hover:bg-[hsl(263,39%,49%)] text-white text-base font-medium min-w-[150px]">{btnTitle}</button>
    </div>
  );
};

export default BaseBtn;