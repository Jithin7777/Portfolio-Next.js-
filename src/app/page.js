'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Works from './components/MyWorks/Works';
import 'slick-carousel/slick/slick.css'; // Import Slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme styles
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

const Page = () => {
  const [scrollToBottom, setScrollToBottom] = useState(true); // Default: scroll to bottom

  // Handle scroll position within useEffect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // If the user is at the top or near the top
      if (scrollPosition < 100) {
        setScrollToBottom(true); // Button will scroll to bottom
      }
      // If the user is near the bottom
      else if (scrollPosition + clientHeight >= scrollHeight - 100) {
        setScrollToBottom(false); // Button will scroll to top
      }
    };

    window.addEventListener('scroll', handleScroll); // Listen to scroll events

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to bottom function
  const scrollToBottomAction = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />
      <Header />
      <Works />
      <Skills/>

      <Contact />

      {/* Single Button for both Scroll To Top/Bottom */}
      <button
        onClick={scrollToBottom ? scrollToBottomAction : scrollToTop}
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full hover:bg-black transition"
      >
        {scrollToBottom ? '↓ Bottom' : '↑ Top'}
      </button>
    </>
  );
};

export default Page;
