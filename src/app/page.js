"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Works from "./components/MyWorks/Works";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ReactLenis } from "lenis/react";

const Page = () => {
  const [scrollToBottom, setScrollToBottom] = useState(true);
  const lenisRef = useRef(null);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top using Lenis
  // const scrollToTop = () => {
  //   lenisRef.current?.scrollTo(0, { duration: 1.2 });
  // };

  // // Scroll to bottom using Lenis
  // const scrollToBottomAction = () => {
  //   lenisRef.current?.scrollTo(document.documentElement.scrollHeight, { duration: 1.2 });
  // };

  return (
    <ReactLenis root ref={lenisRef} 
      options={{
        lerp: 0.05,
        smoothWheel: true,
      }}>
      <Navbar />
      <Header />
      <Works />
      <Skills />
      <Contact />
      <Footer />

      {/* Single Scroll Button */}
      {/* <button
        onClick={scrollToBottom ? scrollToBottomAction : scrollToTop}
        className="fixed bottom-20 right-4 bg-black text-white p-3 rounded-full hover:bg-black transition"
      >
        {scrollToBottom ? <FaArrowDown size={24} /> : <FaArrowUp size={24} />}
      </button> */}
    </ReactLenis>
  );
};

export default Page;