import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const ContactButton = () => {
  return (
    <div>
      <a
        href="#contact"
        className="border-teal hover:border-charcoal hover:text-charcoal text-teal mb-3 ml-4 mt-3 hidden items-center gap-3 rounded-full border px-10 py-2.5 font-Ovo transition duration-300 md:text-xl lg:flex"
      >
        Contact
        <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
      </a>
    </div>
  );
};

export default ContactButton;
