"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { workData } from "@/assets/assets";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function AnimatedChar({ char, index, totalChars, scrollYProgress }) {
  const start = index / totalChars;
  const end = (index + 1) / totalChars;

  const charProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const color = useTransform(charProgress, [0, 1], ["#4b4a4a", "#000000"]);

  return (
    <motion.span style={{ color }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function Works() {
  const workSectionRef = useRef(null);
   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const offsetValues = isMobile
    ? ["start 2", "end 2.1"] 
    : ["start 1", "end 0.8"]; 

  const { scrollYProgress } = useScroll({
    target: workSectionRef,
    offset: offsetValues,
  });

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = workData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(workData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heading = "My Works";
  const description =
    "Welcome to my portfolio!  Explore a collection of projects showcasing my expertise in full stack development.";

  return (
    <div ref={workSectionRef} id="work" className="w-full py-24 bg-gray-50 relative">
      <h2 className="font-Ovo text-center text-2xl sm:text-xl md:text-3xl lg:text-5xl">
        {heading.split("").map((char, index) => (
          <AnimatedChar
            key={index}
            char={char}
            index={index}
            totalChars={heading.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </h2>

      <p className="font-Ovo text-center max-w-4xl mx-auto mt-5 text-sm  font-bold  md:text-2xl  md:px-5">
        {description.split("").map((char, index) => (
          <AnimatedChar
            key={index}
            char={char}
            index={index}
            totalChars={description.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-5 lg:px-10">
        {currentItems.map((work, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:shadow-2xl transition-shadow rounded-xl overflow-hidden"
          >
            <Slider {...settings}>
              <div>
                <img
                  src={work.bgImage}
                  alt={work.title}
                  className="w-full h-40 sm:h-40 md:h-32 lg:h-48 object-cover"
                />
              </div>
              <div>
                <img
                  src={work.bgImage1}
                  alt={work.title}
                  className="w-full h-40 sm:h-40 md:h-32 lg:h-48 object-cover"
                />
              </div>
              <div>
                <img
                  src={work.bgImage2}
                  alt={work.title}
                  className="w-full h-40 sm:h-40 md:h-32 lg:h-48 object-cover"
                />
              </div>
            </Slider>

            <div className="p-4 mt-3">
              <h3 className="font-medium text-gray-800 text-lg sm:text-xl">
                {work.title
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </h3>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setSelectedWork(work)}
                    className="mt-3 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 w-full sm:w-auto"
                  >
                    View Details
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white !rounded-xl">
                  <DialogHeader>
                    <DialogTitle>
                      {selectedWork?.title
                        .split(" ")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                        )
                        .join(" ")}
                    </DialogTitle>
                  </DialogHeader>
                  <div>
                    <img
                      src={selectedWork?.bgImage}
                      alt={selectedWork?.title}
                      className="mt-4 w-full h-48 object-cover rounded-xl"
                    />
                    <p className="mt-5 text-lg sm:text-xl font-medium">
                      {selectedWork?.description}
                    </p>
                    {selectedWork?.url && (
                      <a
                        href={selectedWork.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-900"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <ReactPaginate
          previousLabel={
            <button
              disabled={currentPage === 0}
              className={`px-3 py-1 border rounded-xl ${
                currentPage === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              ← Previous
            </button>
          }
          nextLabel={
            <button
              disabled={currentPage === pageCount - 1}
              className={`px-3 py-1 border rounded-xl ${
                currentPage === pageCount - 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Next →
            </button>
          }
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex space-x-2"
          breakClassName="px-3 py-1"
          pageClassName="px-3 py-1 border rounded-xl"
          activeClassName="bg-black rounded-xl text-white"
        />
      </div>
    </div>
  );
}
