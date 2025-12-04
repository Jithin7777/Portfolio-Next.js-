import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const ContactButton = () => {
  return (
    <div>
      <a
        href="#contact"
        className="hidden lg:flex mt-3 items-center gap-3 mb-3 px-10 py-2.5 border border-teal hover:border-charcoal hover:text-charcoal transition duration-300 rounded-full ml-4 font-Ovo text-teal"
      >
        Contact
        <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
      </a>
    </div>
  );
};

export default ContactButton;
