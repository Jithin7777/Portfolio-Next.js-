import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="px-4 py-20 sm:px-8 lg:px-12">
      <div className="flex justify-center mt-10">
         <Image src={assets.profile_img} alt="Profile" className="w-24 sm:w-32 lg:w-40 rounded-full" />
      </div>
      <h3 className="flex font-Ovo gap-2 items-center text-lg sm:text-2xl md:text-xl justify-center pt-6 sm:pt-10 text-center">
        Hi, I'm Jithin Jose 
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-5 sm:w-6" />
      </h3>
      <h1 className="font-Ovo text-2xl sm:text-4xl lg:text-6xl xl:text-[66px] text-center leading-snug mt-4">
        Full Stack Developer based in Kerala
      </h1>
      <p className="max-w-2xl font-Ovo text-sm sm:text-base lg:text-lg text-center mx-auto mt-4">
        I am a full stack developer from Alappuzha, Kerala with 1 year of experience in companies like Luminar Technolab and Luminar Technohub.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          href="#contact"
          className="flex items-center bg-black border border-gray-500 px-6 sm:px-10 py-2 sm:py-3 rounded-full text-white gap-2 text-sm sm:text-base hover:bg-gray-100 transition"
        >
          Contact Me
          <Image alt="Right Arrow" src={assets.right_arrow_white} className="w-4" />
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
