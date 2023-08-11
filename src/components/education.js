import React, { useState } from "react";
import benboardley from "./benboardley.jpg";
import { education } from "../data";
//w-full sm:w-2/3 md:w-1/2 lg:w-1/3
function Education(){
  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" sm:m-10 m-3 bg-gray-600 h-auto rounded-lg box-border overflow-auto shadow-md p-0 flex flex-col sm:flex-col bg-opacity-70 float-right pr-2">
      <div className="flex flex-col md:flex-row">
      <div className="mb-4 flex-grow-0 flex-shrink-0 flex flex-col items-center align-middle justify-center">
        <h1 className="text-2xl font-bold underline">
          Education
        </h1>
        <div className="flex flex-col">
            {
              education.map((education) => (
                <div className="flex flex-col sm:flex-row mb-3 justify-end">
                  <img
                  alt="gallery"
                  className="object-center opacity-70"
                  src={education.image}
                />
                <div className="flex flex-col">
                <p className="leading-relaxed text-lg">{education.major}</p>
                <p className="leading-relaxed">Purdue University ({education.years})</p>
                <p className="leading-relaxed font-bold">{education.degree}</p>
                <p className="leading-relaxed">GPA: {education.GPA}</p>
                </div>
                </div>
              ))
            }
          </div>
        <br></br>
        <br></br>
        <button 
            onClick={() => setShowMore(!showMore)} 
            className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            See More
        </button>
      </div>
      </div>
      {showMore && (
        <div>
          <button 
            onClick={() => setShowMore(!showMore)} 
            className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            See Less
        </button>
        </div>
      )}
    </div>
  );
}

export default Education;