"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { workData } from "@/assets/assets";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Works = () => {
  const workSectionRef = useRef(null); 
  const itemsPerPage = 5; 
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

  return (
    <div ref={workSectionRef} id="work" className="w-full py-8 bg-gray-50">
      <h2 className="font-Ovo text-center text-2xl sm:text-xl md:text-3xl lg:text-5xl">
        My Works
      </h2>
      <p className="font-Ovo text-center max-w-2xl mx-auto mt-5">
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise in full stack development.
      </p>

      <div className="mt-10 grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-5 lg:px-28">
        {currentItems.map((work, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl  overflow-hidden justify-center"
          >
            <div className="">
              {/* Carousel component inside card */}
              <Slider {...settings}>
                <div>
                  <img
                    src={work.bgImage}
                    alt={work.title}
                    className="w-full h-40 sm:h-40 md:h-32 lg:h-48 object-cover filter-none"
                  />
                </div>
                <div>
                  <img
                    src={work.bgImage1}
                    alt={work.title}
                    className="w-full h-40 sm:h-40 md:h-32 lg:h-48 object-cover "
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
            </div>
            <div className="p-4 mt-3">
              <h3 className="text-base sm:text-lg md:text-xl font-Ovo">
                {work.title
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </h3>
              {/* <p className="mt-2 text-sm sm:text-base text-gray-700">{work.description}</p> */}

              {/* Dialog Trigger Button */}
              <Dialog className="!rounded-xl">
                <DialogTrigger asChild>
                  <button
                    onClick={() => setSelectedWork(work)}
                    className="mt-3 px-4  px-10 py-2 bg-black text-white rounded-xl hover:bg-gray-800 
             text-sm sm:text-base md:text-lg  w-full sm:w-auto mx-auto"
                  >
                    View Details
                  </button>
                </DialogTrigger>
                {/* Dialog Content */}
                <DialogContent className='bg-white !rounded-xl '>
                  <DialogHeader>
                    <DialogTitle className="">
                      {selectedWork?.title.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <img
                      src={selectedWork?.bgImage}
                      alt={selectedWork?.title}
                      className="mt-4  w-full h-48 object-cover rounded-md"
                    />
                    <p className="mt-5">{selectedWork?.description}</p>
                    {/* Button to visit the website */}
                    {selectedWork?.url && (
                      <a
                        href={selectedWork.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 rounded-xl inline-block px-4 py-2 bg-black text-white text-center rounded-md hover:bg-black"
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
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed "
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              ← Previous
            </button>
          }
          nextLabel={
            <button
              disabled={currentPage === pageCount - 1}
              className={`px-3 py-1 border rounded-md rounded-xl ${
                currentPage === pageCount - 1
                  ? "bg-black-500 text-gray-500 cursor-not-allowed"
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
};

export default Works;
