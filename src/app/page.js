"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Works from "./components/MyWorks/Works";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Page = () => {
  const [scrollToBottom, setScrollToBottom] = useState(true);

  // Handle scroll position within useEffect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollPosition < 100) {
        setScrollToBottom(true);
      } else if (scrollPosition + clientHeight >= scrollHeight - 100) {
        setScrollToBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to bottom function
  const scrollToBottomAction = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Header />
      <Works />
      <Skills />

      <Contact />
      <Footer />
      {/* Single Button for both Scroll To Top/Bottom */}
      <button
        onClick={scrollToBottom ? scrollToBottomAction : scrollToTop}
        className="fixed bottom-20 right-4 bg-black text-white p-3 rounded-full hover:bg-black transition"
      >
        {scrollToBottom ? <FaArrowDown size={24} /> : <FaArrowUp size={24} />}
      </button>
    </>
  );
};

export default Page;
