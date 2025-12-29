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
          className="mb-3 mr-14 w-28 cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Logo;
