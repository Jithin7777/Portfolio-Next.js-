import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const MenuToggle = ({openMenu}) => {
    
  return (
    <div>
      <button className="block md:hidden ml-3 mt-2">
        <Image onClick={openMenu} src={assets.menu_black} alt="" className="w-6 mb-3" />
      </button>
    </div>
  );
};

export default MenuToggle;
