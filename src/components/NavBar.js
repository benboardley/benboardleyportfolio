import React, { useState } from "react";
const NavBar = ({ setActiveComponent }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div>
            <div className = "fixed top-0 z-10 w-full opacity-70 bg-gray-600 h-16 hidden lg:flex items-center justify-around text-white shadow-md">
                <div onClick={() => setActiveComponent("BenBoardley")} className="pl-15 px-4 py-2 text-2xl font-bold border-white rounded  hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200">
                <a href="#BenBoardley" className="px-4 py-2 text-2xl font-bold border-white rounded  hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounde">
                    Ben Boardley
                </a>
                </div>
                <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    <a href="#education" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        Education
                    </a>
                </div>
                <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    <a href="#projects" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        Projects
                    </a>
                </div>
                <div onClick={() => setActiveComponent("Resume")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    <a href="#Resume" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        Resume
                    </a>
                </div>
                <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    <a href="#contact" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className = "fixed top-0 z-30 opacity-70 bg-gray-600 lg:hidden px-4 cursor-pointer items-center justify-around text-white shadow-md" onClick={() => setMenuOpen(!menuOpen)}>
                <span>☰</span>
            <div className={`w-full z-30 opacity-70 bg-gray-600 lg:hidden px-4 cursor-pointer items-center justify-around text-white shadow-md"  ${menuOpen ? 'fixed' : 'hidden'}`}>
                    <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                    <a href="#BenBoardley" className="px-4 py-2 text-2xl font-bold border-white rounded  hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounde">
                        Ben Boardley
                    </a>
                    </div>
                    <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        <a href="#education" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                            Education
                        </a>
                    </div>
                    <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        <a href="#projects" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                            Projects
                        </a>
                    </div>
                    <div onClick={() => setActiveComponent("Resume")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        <a href="#Resume" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                            Resume
                        </a>
                    </div>
                    <div onClick={() => setActiveComponent("BenBoardley")} className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                        <a href="#contact" className="px-4 py-2 text-2xl font-bold hover:bg-white hover:text-gray-600 cursor-pointer transition-colors duration-200 rounded">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;