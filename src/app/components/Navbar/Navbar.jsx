"use client";
import React, { useRef, useState } from "react";
import ThemeToggle from "./partials/ThemeToggle";
import ContactButton from "./partials/ContactButton";
import MenuToggle from "./partials/MenuToggle";
import Logo from "./partials/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";

 const Navbar = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    menuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuRef.current.style.transform = "translateX(-100%)";
  };

  return (
    <div>
      <nav className="fixed w-full lg:px-8 xl:px-[8%] px-5 flex items-center justify-between z-50 mt-3 bg-beige shadow-lg">
      <h1 className="font-Ovo mb-3  text-2xl"> Jithin Jose</h1>
        <ul className="hidden md:flex space-x-8 rounded-md py-3 px-12 mb-3 bg-white shadow-md">
          <li>
            <a
              href="#top"
              className="text-charcoal hover:text-teal transition duration-300 font-Ovo"
            >
              Home
            </a>
          </li>
          {/* <li>
            <a
              href="#about"
              className="text-charcoal hover:text-teal transition duration-300 font-Ovo"
            >
              About Me
            </a>
          </li> */}
          
          <li>
            <a
              href="#work"
              className="text-charcoal hover:text-teal transition duration-300 font-Ovo"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="text-charcoal hover:text-teal transition duration-300 font-Ovo"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-charcoal hover:text-teal transition duration-300 font-Ovo"
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ContactButton />
          <MenuToggle openMenu={openMenu} />
        </div>
      </nav>

      <MobileMenu
        closeMenu={closeMenu}
        menuRef={menuRef}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};

export default Navbar;
