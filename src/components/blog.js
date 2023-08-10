import React from "react";
import benboardley from "./benboardley.jpg";
//w-full sm:w-2/3 md:w-1/2 lg:w-1/3
function Blog ({ setActiveComponent }) {
  return (
    <div className=" m-10 bg-gray-600 h-auto rounded-lg box-border overflow-auto shadow-md m-0 p-0 flex flex-row bg-opacity-70">
      <div className="mb-4 flex-grow-0 flex-shrink-0 flex flex-col items-center align-middle justify-center">
        <h1 className="text-2xl font-bold">
          About Me
        </h1>
        <img src={benboardley} className="w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/4 object-cover"/>
      </div>
      <div className="text-white text-center flex-grow  content-center px-2">
        <h2 className = "font-bold">Ambition and Passions</h2>
        I will be finishing my undergraduate degree in Computer Engineering at Purdue University in the spring of 2024. After this I will be pursuing a Masters of ECE to be complete in the Spring of 2025.

        My current academic focus converges on two major areas of interest: Software Engineering and Machine Learning.
        I am currently in search of an Internship for the summer of 2024 to help bridge the gap between my undergraduate and graduate studies in order to help me gain industry experience surrounding these two domains.
      <br></br><br></br>
        <h2 className = "font-bold">Current Activity</h2>
        <span> I am contributing to both IEEE ROV and the Purdue CAM2 Research group. Through these groups I have gained experience working on large and small teams with students ranging from Graduate to Freshman level.</span>
        <span>In IEEE ROV I have gained experience working on a large scale team. I have gained various experiences from camera streaming pipelines to embedded code to reproducability through Ansible.</span>
        <span>While in CAM2 I took on the project of developing the Infrastructure for a large scale computer vision competition. In which I had to create a submission evaluation pipline. This is detailed in the projects section.</span>
        <br></br>
        <br></br>
        <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => setActiveComponent("Get To Know Me")}
                >
                <a href="#contact">Get to Know Me</a>
          </button>
      </div>
    </div>
  );
}

export default Blog;