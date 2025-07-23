import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="px-4 py-20 sm:px-8 lg:px-12">
      {/* Profile Image */}
      <div className="flex justify-center mt-8">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="w-32  h-36 sm:w-32  lg:w-40 lg:h-44 rounded-full object-cover border-4 mb-1 border-gray-100 "
        />
      </div>

      {/* Greetings */}
      <h3 className="flex font-Ovo  text-xl sm:text-xl  gap-2 items-center  md:text-3xl justify-center pt-6 sm:pt-10 text-center">
        Hi, I'm Jithin Jose
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-5 sm:w-6" />
      </h3>

      {/* Main Title with Animation */}
      <motion.h1
        className="font-Ovo text-2xl sm:text-4xl lg:text-6xl xl:text-[66px] text-center leading-snug mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        Full Stack Developer based in Kerala
      </motion.h1>

      {/* Description */}
      <p className="max-w-2xl font-Ovo text-sm sm:text-base lg:text-lg font-medium text-center mx-auto mt-4 ">
        I am a full stack developer from Alappuzha, Kerala with 1 year of
        experience in companies like <b>Foodo AI</b> and <b>Luminar Technohub</b>.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          href="#contact"
          className="flex items-center bg-black border border-gray-500 px-6 sm:px-10 py-2 sm:py-3 rounded-full text-white gap-2 text-sm sm:text-base hover:bg-slate-950 transition"
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
          className="flex items-center border border-gray-500 px-6 sm:px-10 py-2 sm:py-3 rounded-full gap-2 text-sm sm:text-base hover:bg-gray-100 transition"
        >
          Resume
          <Image alt="Download Icon" src={assets.download_icon} className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
