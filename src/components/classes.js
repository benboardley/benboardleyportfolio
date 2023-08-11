import React from "react";
import { relevantClasses, upcomingClasses } from "../data";

export default function Languages() {
    return(<section className="p-10">
        <div className="container text-gray px-5 py-10 mx-auto text-center">
            <h1 className= "text-white text-2xl md:text-4xl mb-4 font-bold">Classes</h1>
            <p className="text-sm md:text-base text-gray-300"></p>
        </div>
        <div className = "grid grid-cols-2">
            <div className="grid grid-cols-1">
                <p className="text-sm md:text-base text-white">Completed Course Work</p>
                {
                    relevantClasses.map((classwork)=>(
                        <div id={classwork.class} className=" h-1/4 border boreder-white border-rounded shadow-lg p-5 mb-4 text-center items-center justify-center">
                            <span className="text-xs sm:text-sm text-white font-bold mb-2">{classwork.class}</span><br></br>
                            <span className="text-xs sm:text-sm-gray mb-2">Language: {classwork.language}</span><br></br>
                            <span className="text-xs sm:text-sm text-gray mb-2">{classwork.description}</span><br></br>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-1">
                <p className="text-sm md:text-base text-white">UpComing Course Work</p>
                {
                    upcomingClasses.map((classwork)=>(
                        <div id={classwork.class} className="h-1/4 border border-white border-rounded shadow-lg p-5 mb-4 text-center items-center justify-center">
                            <span className="text-xs sm:text-sm text-white font-bold mb-2">{classwork.class}</span><br></br>
                            <span className="text-xs sm:text-sm text-gray mb-2">Language: {classwork.language}</span><br></br>
                            <span className="text-xs sm:text-sm text-gray mb-2"></span>
                            <span className="text-xs sm:text-sm text-gray mb-2">{classwork.description}</span><br></br>
                        </div>
                    ))
                }
            </div>
        </div>
        </section>
    );}