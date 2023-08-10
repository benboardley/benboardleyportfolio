import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"; 
import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Languages from "./components/languages"
import Skills from "./components/skills"
import Classes from "./components/classes"
import Resume from "./components/resume"
import background from "./background.jpg"
import Contact from "./components/contact"
import 'aos/dist/aos.css';  // <- AOS styles
import AOS from 'aos';

function App() {
  const [activeComponent, setActiveComponent] = useState("BenBoardley");
  useEffect(() => {   // <- Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[url('background.jpg')] min-h-screen m-0 bg-fixed">
      <NavBar setActiveComponent={setActiveComponent} className="fixed top-0 z-10 w-full" />
      <main className="text-white pt-500 flex flex-col">
      <div className="h-3/4 w-3/4 relative overflow-hidden rounded-lg text-left justify-start float-left mt-40 ml-20" data-aos="fade-up">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixe">
          <div className="flex h-full text-left float-lef">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Benjamin Boardley</h2>
              <h4 className="mb-6 text-xl font-semibold">Senior in Computer Engineering at Purdue University</h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                Get in Contact
              </button>
            </div>
          </div>
        </div>
      </div>
          <div id="BenBoardley" className="pt-5 justify-center">
            <div className=" flex" data-aos="fade-up">
              <About />
            </div>
            <Projects/>
          </div>
          <div id="skills" className='flex justify-center items-center' data-aos="fade-up">
            <Languages />
            <Skills />
          </div>
      
        <div id="classes" data-aos="fade-up">
          <Classes />
        </div>
        
        { activeComponent === "Resume" && (
        <div id="Resume">
          <Resume />
        </div>
        )}
        <div id="contact" data-aos="fade-up">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
