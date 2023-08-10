import React from "react";

const NavBar = ({ setActiveComponent }) => {
    return(
        <div className = "fixed top-0 z-10 w-full opacity-70 bg-gray-600 h-16 flex items-center justify-around text-white shadow-md">
            <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold border-white rounded  hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200">
            <a href="#BenBoardley" className="px-4 py-2 text-2xl font-bold border-white rounded  hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounde">
                Ben Boardley
            </a>
            </div>
            <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <a href="#projects" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    Projects
                </a>
            </div>
            <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <a href="#skills" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    Skills
                </a>
            </div>
            <div onClick={() => setActiveComponent("Resume")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <a href="#Resume" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    Resume
                </a>
            </div>
            <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <a href="#classes" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    Relevant Courses
                </a>
            </div>
            <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <a href="#contact" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    Contact Me
                </a>
            </div>
        </div>
    );
}

export default NavBar;