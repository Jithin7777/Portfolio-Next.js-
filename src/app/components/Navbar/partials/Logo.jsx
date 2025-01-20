import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      {" "}
      <a href="">
        <Image
          src={assets.logo}
          alt="logo"
          className="w-28 cursor-pointer mr-14 mb-3"
        />
      </a>
    </div>
  );
};

export default Logo;
