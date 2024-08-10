"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../public/assets/googleIcon.svg";
import gitHubIcon from "../../public/assets/gitHubIcon.svg";

function BaseAuthentication() {
  return (
    <>
      <div className="flex justify-between mt-8 py-8 border-t">
        <button className="py-2 px-10 bg-[#E6E6E680] hover:bg-[#dedbdb] font-bold flex gap-4 items-center">
          <Image src={googleIcon} alt="Google icon" />
          Continue with Google
        </button>
        <button type="button" onClick={() => alert("Continue with Github in progress")} className="py-2 px-10 bg-[#E6E6E680] hover:bg-[#dedbdb] font-bold flex gap-4 items-center">
          <Image src={gitHubIcon} alt="Github icon" />
          Continue with Github
        </button>
      </div>      
    </>
  );
}

export default BaseAuthentication;
