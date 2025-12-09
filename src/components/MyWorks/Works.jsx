"use client";
import dynamic from "next/dynamic";
import React, { useRef, useState, useEffect } from "react";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const offsetValues = isMobile ? ["start 2", "end 2"] : ["start 1", "end 0.8"];

  const { scrollYProgress } = useScroll({
    target: workSectionRef,
    offset: offsetValues,
  });

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
    "Welcome to my portfolio! Explore a collection of projects showcasing my expertise in full stack development.";

  const WorkDetails = ({ work }) => (
    <>
      <div className="mt-4">
        <Slider {...settings}>
          <div>
            <img
              src={work.bgImage}
              alt={work.title}
              className="w-full h-44 object-cover rounded-xl"
            />
          </div>
          {work.bgImage1 && (
            <div>
              <img
                src={work.bgImage1}
                alt={work.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          )}
          {work.bgImage2 && (
            <div>
              <img
                src={work.bgImage2}
                alt={work.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          )}
        </Slider>
      </div>
      <p className="mt-5 text-md sm:text-xl font-medium">{work.description}</p>
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-2 ">
        {work.tech?.map((item, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-green-200 text-gray-800 rounded"
          >
            {item}
          </span>
        ))}
      </div>

      {work.url && (
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-3 py-2 bg-black text-white text-sm rounded-xl hover:bg-gray-900"
        >
          Visit Website
        </a>
      )}
    </>
  );

  return (
    <div
      ref={workSectionRef}
      id="work"
      className="w-full rounded-t-3xl  border-t-8  border-gray-200 py-5 md:py-16 bg-gray-50 relative"
    >
      {/* Heading */}
      <h2 className="font-Ovo  text-center text-2xl sm:text-xl md:text-3xl lg:text-5xl">
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

      {/* Description */}
      <p className="font-Ovo px-1 md:px-0 text-center max-w-3xl mx-auto mt-5 text-sm font-bold md:text-2xl ">
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

      {/* Work Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-5 lg:px-10">
        {currentItems.map((work, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:shadow-2xl transition-shadow rounded-xl overflow-hidden"
          >
            {/* Thumbnail slider */}
            <Slider {...settings}>
              <div>
                <img
                  src={work.bgImage}
                  alt={work.title}
                  className="w-full h-40 md:h-32 lg:h-48 object-cover"
                />
              </div>
              {work.bgImage1 && (
                <div>
                  <img
                    src={work.bgImage1}
                    alt={work.title}
                    className="w-full h-40 md:h-32 lg:h-48 object-cover"
                  />
                </div>
              )}
              {work.bgImage2 && (
                <div>
                  <img
                    src={work.bgImage2}
                    alt={work.title}
                    className="w-full h-40 md:h-32 lg:h-48 object-cover"
                  />
                </div>
              )}
            </Slider>

            <div className="p-4 mt-3">
              <h3 className="font-medium text-gray-800 text-lg sm:text-xl">
                {work.title
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h3>

              {/* Mobile Drawer */}
              {isMobile ? (
                <Drawer>
                  <DrawerTrigger asChild>
                    <button
                      onClick={() => setSelectedWork(work)}
                      className="mt-3 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-900 w-full"
                    >
                      View Details
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-white !rounded-t-2xl ">
                    <DrawerHeader className="flex items-center justify-between">
                      <DrawerTitle>{selectedWork?.title}</DrawerTitle>
                      <DrawerClose asChild>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-50">
                          <X className="w-6 h-6" />
                        </button>
                      </DrawerClose>
                    </DrawerHeader>
                    <div className="px-4 pb-4">
                      {selectedWork && <WorkDetails work={selectedWork} />}
                    </div>
                  </DrawerContent>
                </Drawer>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setSelectedWork(work)}
                      className="mt-3 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 w-full sm:w-auto"
                    >
                      View Details
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white !rounded-xl max-w-2xl">
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
                        className="mt-4 w-full h-64 object-cover rounded-xl"
                      />
                      <p className="mt-5 text-lg sm:text-xl font-medium">
                        {selectedWork?.description}
                      </p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {work.tech?.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-lg bg-green-200 text-gray-800 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

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
              )}
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
        className={`px-2 sm:px-3 py-1 border rounded text-sm sm:text-sm  ${
          currentPage === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        ← Prev
      </button>
    }
    nextLabel={
      <button
        disabled={currentPage === pageCount - 1}
        className={`px-2 sm:px-3 py-1 border rounded text-sm sm:text-sm ${
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
    marginPagesDisplayed={1}
    pageRangeDisplayed={2}
    onPageChange={handlePageClick}
    containerClassName="flex space-x-2 text-sm sm:text-sm"
    breakClassName="px-2 py-1"
    pageClassName="px-2 sm:px-3 py-1 border rounded"
    activeClassName="bg-black text-white"
  />
</div>
    </div>
  );
}
