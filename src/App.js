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
import Blog from "./components/blog"
import Contact from "./components/contact"
import Education from './components/education';
import LangAndSkill from './components/langandskill';
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
  //bg-[url('background.jpg')] bg-cover  bg-center m-0 bg-fixed min-h-screen
  return (
    <div className="font-serif">
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
                <a href="#contact">Get in Contact</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-sm mt-5">
      { activeComponent === "blog" && (
            <div id="blog">
              <Blog />
            </div>
          )}
          { activeComponent === "BenBoardley" && (
            <div className='flex flex-col'>
              {/* This is the Ben Boardley section */}
              <div id="BenBoardley" className="mt-5 justify-center" data-aos="fade-up">
                <div className=" flex">
                  <About/>
                </div>
              </div>
              <div id="education">
              <Education />
              <LangAndSkill />
              {/*<div className="ml-40">
                <h1 className = " underline text-2xl">Education</h1>
                <p>I will be finishing my undergraduate degree in Computer Engineering at Purdue University in the spring of 2024. 
                  After this I will be pursuing a Masters of ECE to be complete in the Spring of 2025. My current academic focus converges on two major areas of interest: Software Engineering and Machine Learning.</p>
          </div>*/}
              {/*<div id="skills" className='flex justify-center items-center' data-aos="fade-up">
                <Languages />
                <Skills />
              </div>
          
              <div id="classes" data-aos="fade-up">
                <Classes />
              </div>*/}
              </div>
              <Projects id = "projects" data-aos="fade-up"/>
              <div id="contact" data-aos="fade-up" className='flex justify-center items-center'>
                <Contact />
              </div>
            </div>
          )}

          { activeComponent === "Resume" && (
            <div id="Resume">
              <Resume />
            </div>
          )}
    </div>

      </main>
    </div>
  );
}

export default App;
