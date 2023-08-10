import React from "react";
import { skills } from "../data";

export default function Languages() {
    return(<section className="p-10">
        <div className="container text-gray px-5 py-10 mx-auto text-center">
            <h1 className= "text-white text-2xl md:text-4xl mb-4 font-bold">Skills</h1>
            <p className="text-sm md:text-base text-gray-300">Click to explore Projects, Classes and situations I have applied these skills</p>
        </div>
        <div className="grid grid-cols-1">
            {
                skills.map((skill)=>(
                    <div id={skill.skill} className="w-25 bg-gradient-to-r bg-gray-600 rounded-lg  hover:bg-gray-200 transition-colors duration-200 shadow-lg p-5 mb-4 text-center items-center justify-center">
                        <span className="text-lg md:text-xl text-white font-bold mb-2">{skill.skill}</span>
                    </div>
                ))
            }
        </div>
    </section>);
}