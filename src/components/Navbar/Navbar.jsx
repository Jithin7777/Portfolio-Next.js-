"use client";
import React, { useRef, useState, useEffect } from "react";
import ThemeToggle from "./partials/ThemeToggle";
import ContactButton from "./partials/ContactButton";
import MenuToggle from "./partials/MenuToggle";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const visibilityThreshold = 10;
  const openMenu = () => {
    setIsMenuOpen(true);
    menuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuRef.current.style.transform = "translateX(-100%)";
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > visibilityThreshold) {
        if (currentScrollY > prevScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div>
      <nav
        className={`bg-beige fixed z-50 flex w-full items-center justify-between px-5 shadow-lg transition-transform duration-300 lg:px-8 xl:px-[8%] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h1 className="mb-3 mt-2 font-Ovo text-2xl uppercase md:text-3xl">
          Jithin Jose
        </h1>
        <ul className="mb-3 mt-3 hidden space-x-8 rounded-3xl bg-white px-12 py-3 text-xl shadow-md md:flex">
          <li>
            <a
              href="#top"
              className="text-charcoal hover:text-teal font-Ovo transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-charcoal hover:text-teal font-Ovo transition duration-300"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="text-charcoal hover:text-teal font-Ovo transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-charcoal hover:text-teal font-Ovo transition duration-300"
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
