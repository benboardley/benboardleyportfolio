import React from "react";
import { skills } from "../data";
import { languages } from "../data";
import { relevantClasses, upcomingClasses } from "../data";
export default function LangAndSkill() {
    return(<section className=" lg:m-10 m-3 bg-gray-600 h-auto rounded-lg box-border overflow-auto shadow-md p-0 flex flex-col sm:flex-col bg-opacity-70 lg:float-left pr-2">
        <div className="flex flex-row justify-center">
            <div className="flex flex-col">
            <h1 className= "text-white text-xl md:text-xl mb-4 font-bold underline">Languages</h1>
            {

                languages.map((language)=>(
                    <div id={language.skill} className="w-1/3 sm:w-1/4">
                        <span className="text-sm md:text-sm text-white font-bold mb-2">{language.skill}</span>
                    </div>
                ))
            }
            </div>
            
            <div className="flex flex-col">
            <h1 className= "text-white text-xl md:text-xl mb-4 font-bold underline">Skills</h1>
            {
                skills.map((skill)=>(
                    <div id={skill.skill} className="w-1/3 sm:w-1/4">
                        <span className="text-sm md:text-sm text-white font-bold mb-2">{skill.skill}</span>
                    </div>
                ))
            }
            </div>
        </div>
        <div className="container text-gray px-5 py-10 mx-auto text-center">
            <h1 className= "text-white text-xl md:text-xl mb-2 font-bold underline">Classes</h1>
            <p className="text-sm md:text-base text-gray-300"></p>
        </div>
        <div className = "grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-1">
                <p className="text-xs md:text-xs  mb-2 text-white font-bold underline">Completed Course Work</p>
                {
                    relevantClasses.map((classwork)=>(
                        <div id={classwork.class} className="">
                            <span className="text-sm sm:text-md text-white font-bold mb-2">{classwork.class}</span><br></br>
                            <span className="text-xs sm:text-sm text-gray mb-2">Language: {classwork.language}</span><br></br>
                            <span className="text-xs sm:text-sm text-gray mb-2">{classwork.description}</span><br></br>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-1">
                <p className="text-xs mb-2 md:text-xs text-white font-bold underline">UpComing Course Work</p>
                {
                    upcomingClasses.map((classwork)=>(
                        <div id={classwork.class} className="">
                            <span className="text-md sm:text-md text-white font-bold mb-2">{classwork.class}</span><br></br>
                            <span className="text-sm sm:text-sm text-gray mb-2">Language: {classwork.language}</span><br></br>
                            <span className="text-sm sm:text-sm text-gray mb-2"></span>
                            <span className="text-sm sm:text-sm text-gray mb-2">{classwork.description}</span><br></br>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>);
}