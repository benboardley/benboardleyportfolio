import React from "react";

const NavBar = ({ setActiveComponent }) => {
    return(
        <div className = "fixed top-0 z-10 w-full opacity-70 bg-gray-600 h-16 flex items-center justify-around text-white shadow-md">
            <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold border-white rounded  hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounde">
                <span>Ben Boardley</span>
            </div>
            <div onClick={() => setActiveComponent("skills")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <span>Skills</span>
            </div>
            <div onClick={() => setActiveComponent("Resume")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <span>Resume</span>
            </div>
            <div onClick={() => setActiveComponent("classes")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <span>Relevant Courses</span>
            </div>
            <div onClick={() => setActiveComponent("contact")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                <span>Contact Me</span>
            </div>
        </div>
    );
}

export default NavBar;