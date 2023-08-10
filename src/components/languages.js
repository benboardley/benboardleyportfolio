import React from "react";
import { languages } from "../data";

export default function Languages() {
    return(<section className="p-10">
        <div className="container text-gray px-5 py-10 mx-auto text-center">
            <h1 className= "text-white text-2xl md:text-4xl mb-4 font-bold"> Languages </h1>
            <p className="text-sm md:text-base text-gray-300">Click to explore Projects, Classes and situations I have applied these languages</p>
        </div>
        <div className="grid grid-cols-1">
            {
                languages.map((language)=>(
                    <div id={language.skill} className="w-25 bg-gray-600 rounded-lg  hover:bg-gray-200 transition-colors duration-200 shadow-lg p-5 mb-4 text-center items-center justify-center">
                        <span className="text-sm md:text-sm text-white font-bold mb-2">{language.skill}</span>
                        <br></br>
                        <span className= "text-white text-xs md:text-sm">{language.level}</span>
                    </div>
                ))
            }
        </div>
    </section>);
}