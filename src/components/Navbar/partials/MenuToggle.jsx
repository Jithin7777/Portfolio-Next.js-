import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const MenuToggle = ({ openMenu }) => {
  return (
    <div>
      <button className="ml-3 mt-2 block md:hidden">
        <Image
          onClick={openMenu}
          src={assets.menu_black}
          alt=""
          className="mb-3 w-6"
        />
      </button>
    </div>
  );
};

export default MenuToggle;
