import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

// Correct import for Heroicons
import { HomeIcon, UserIcon, BriefcaseIcon, FolderIcon, PhoneIcon } from '@heroicons/react/24/solid';

const MobileMenu = ({ closeMenu, menuRef, isMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0  z-50 md:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 "
        onClick={closeMenu}
      ></div>

      {/* Sidebar Menu */}
      <ul
        ref={menuRef}
        className={`absolute left-0 top-0 w-60 h-full bg-white shadow-lg rounded-r-lg transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-5 right-6 ">
          <Image
            src={assets.close_black}
            alt="Close Menu"
            className="w-6 h-6 cursor-pointer rounded-full object-cover"
            onClick={closeMenu}
          />
        </div>

        {/* Menu Header */}
        <div className="text-center mt-14 mb-8">

        </div>

        {/* Menu Items */}
        <li>
      
        <div className="flex justify-center   ">
  <Image
    src={assets.profile_img}
    alt="Profile Image"
    className="w-24 h-24 rounded-full border-4 mb-1 border-gray-100 shadow-md object-cover"
    onClick={closeMenu}
  />
</div>
   

          <a
            onClick={closeMenu}
            href="#top"
            className="block py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md transition duration-300 flex items-center gap-3"
          >
            <HomeIcon className="text-gray-600 w-5 h-5" />
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
            className="block py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md transition duration-300 flex items-center gap-3"
          >
            <FolderIcon className="text-gray-600 w-5 h-5" />
            My Works
          </a>
        </li>
        <li>
          <a
            onClick={closeMenu}
            href="#skill"
            className="block py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md transition duration-300 flex items-center gap-3"
          >
            <BriefcaseIcon className="text-gray-600 w-5 h-5" />
          Skills
          </a>
        </li>
        <li>
          <a
            onClick={closeMenu}
            href="#contact"
            className="block py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md transition duration-300 flex items-center gap-3"
          >
            <PhoneIcon className="text-gray-600 w-5 h-5" />
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
