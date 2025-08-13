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
import { ReactLenis } from "lenis/react";

const Page = () => {
  const lenisRef = useRef(null);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.03,
        smoothWheel: true,
      }}
    >
      <Navbar />
      <div className="sticky top-0 w-full ">
        <Header />
      </div>
      <Works />
      <Skills />
      <Contact />

      <Footer />
    </ReactLenis>
  );
};

export default Page;
