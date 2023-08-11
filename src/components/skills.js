import React from "react";
import { skills } from "../data";

export default function Languages() {
    return(<section className="p-5">
        <div className="container text-gray px-5 py-10 mx-auto text-center">
            <h1 className= "text-white text-2xl md:text-4xl mb-4 font-bold">Skills</h1>
        </div>
        <div className="grid grid-cols-1">
            {
                skills.map((skill)=>(
                    <div id={skill.skill} className="w-1/3 sm:w-1/4 bg-gradient-to-r bg-gray-600 rounded-lg  hover:bg-gray-200 transition-colors duration-200 shadow-lg p-5 mb-4 text-center items-center justify-center">
                        <span className="text-sm md:text-sm text-white font-bold mb-2">{skill.skill}</span>
                    </div>
                ))
            }
        </div>
    </section>);
}