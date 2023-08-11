import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import benboardley from "./benboardley.jpg";

export default function Projects() {
  return (
    <section id="projects" className="sm:m-10 m-3 text-gray-300 bg-gray-600 h-auto rounded-lg box-border overflow-auto shadow-md p-0 flex flex-row bg-opacity-70">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Personal and production level projects I have helped develop
            </p>
        </div>
        <div className="flex flex-wrap -m-4">
            {projects.map((project)=>(
            <a
            href={project.link}
            key={project.image}
            className="sm:w-100 w-100 p-4 flex flex-row"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="px-8 py-10 relative w-full border-4 border-gray-800 flex flex-col justify-center text-xs sm:text-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <img
                  alt="gallery"
                  className="sm:w-100 w-full object-center opacity-70"
                  src={project.image}
                />
                <p className="leading-relaxed">{project.description}</p>
                <p className=" font-bold text-xs">Skills: {project.skills}</p>
            </div>
            </a>
            ))}
        </div>
        </div>
    </section>
  );
}
