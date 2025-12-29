// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-beige py-3 shadow-md">
      <div className="text-charcoal container mx-auto text-center font-Ovo">
        <p>
          &copy; {new Date().getFullYear()} Jithin Jose. All rights reserved.
        </p>
        <p>
          Built with <span className="text-teal">❤</span> by Jithin Jose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
