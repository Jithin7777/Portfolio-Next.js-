import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <div className="px-4 py-20 sm:px-8 lg:px-12">
      {/* Profile Image */}
      <div className="mt-8 flex justify-center">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="mb-1 h-36 w-32 rounded-full border-4 border-green-200 object-cover shadow-2xl sm:w-32 lg:h-44 lg:w-40"
        />
      </div>

      {/* Greetings */}
      <h2 className="flex items-center justify-center gap-2 pt-6 text-center font-Ovo text-2xl sm:pt-10 md:text-5xl">
        Hi, I'm <span className="text-green-500">Jithin Jose</span>
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-5 sm:w-6" />
      </h2>

      {/* Main Title with Animation */}
      <motion.h1
        className="mt-3 text-center font-Ovo text-2xl leading-snug sm:text-4xl lg:text-5xl xl:text-[56px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <span className="text-green-500">Full Stack Developer </span>based in
        Kerala
      </motion.h1>

      {/* Description */}
      <p className="mx-auto mt-3 max-w-2xl text-center font-Ovo text-sm font-medium sm:text-base lg:text-lg">
        I am a full stack developer from Alappuzha, Kerala with 1.5 years of
        experience in companies like <b>Foodo AI</b> and{" "}
        <b>Luminar Technohub</b>.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-row items-center justify-center gap-4 sm:flex-row">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-gray-500 bg-black px-6 py-2 text-sm text-white transition hover:bg-slate-950 sm:px-10 sm:py-3 sm:text-base"
        >
          Contact Me
          <Image
            alt="Right Arrow"
            src={assets.right_arrow_white}
            className="w-4"
          />
        </a>
        <a
          href="/resume"
          download
          className="flex items-center gap-2 rounded-full border border-gray-500 px-6 py-2 text-sm transition hover:bg-gray-100 sm:px-10 sm:py-3 sm:text-base"
        >
          Resume
          <Image
            alt="Download Icon"
            src={assets.download_icon}
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
