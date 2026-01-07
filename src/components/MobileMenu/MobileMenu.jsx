import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

// Correct import for Heroicons
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const MobileMenu = ({ closeMenu, menuRef, isMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${
        isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeMenu}
      ></div>

      {/* Sidebar Menu */}
      <ul
        ref={menuRef}
        className={`absolute left-0 top-0 h-full w-72 transform rounded-r-lg bg-white shadow-lg transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="absolute right-6 top-5">
          <Image
            src={assets.close_black}
            alt="Close Menu"
            className="h-6 w-6 cursor-pointer rounded-full object-cover"
            onClick={closeMenu}
          />
        </div>

        {/* Menu Header */}
        <div className="mb-8 mt-14 text-center"></div>

        {/* Menu Items */}
        <li>
          <div className="flex justify-center">
            <Image
              src={assets.profile_img}
              alt="Profile Image"
              className="mb-1 h-28 w-28 rounded-full border-4 border-gray-100 object-cover shadow-md"
              onClick={closeMenu}
            />
          </div>

          <a
            onClick={closeMenu}
            href="#top"
            className="block flex items-center gap-3 rounded-md px-6 py-4 text-lg font-medium text-gray-800 transition duration-300 hover:bg-gray-100"
          >
            <HomeIcon className="h-5 w-5 text-gray-600" />
            Home
          </a>
        </li>
        {/* <li>
          <a
            onClick={closeMenu}
            href="#about"
            className="block py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md transition duration-300 flex items-center gap-3"
          >
            <UserIcon className="text-gray-600 w-5 h-5" />
            About Me
          </a>
        </li> */}

        <li>
          <a
            onClick={closeMenu}
            href="#work"
            className="block flex items-center gap-3 rounded-md px-6 py-4 text-lg font-medium text-gray-800 transition duration-300 hover:bg-gray-100"
          >
            <FolderIcon className="h-5 w-5 text-gray-600" />
            My Works
          </a>
        </li>
        <li>
          <a
            onClick={closeMenu}
            href="#skill"
            className="block flex items-center gap-3 rounded-md px-6 py-4 text-lg font-medium text-gray-800 transition duration-300 hover:bg-gray-100"
          >
            <BriefcaseIcon className="h-5 w-5 text-gray-600" />
            Skills
          </a>
        </li>
        <li>
          <a
            onClick={closeMenu}
            href="#contact"
            className="block flex items-center gap-3 rounded-md px-6 py-4 text-lg font-medium text-gray-800 transition duration-300 hover:bg-gray-100"
          >
            <PhoneIcon className="h-5 w-5 text-gray-600" />
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
