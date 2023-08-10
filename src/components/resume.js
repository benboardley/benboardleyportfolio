import React from "react";
import Resume from "../Resume.pdf"
export default function App(){
    return(
        <div className="flex justify-center items-center">
            <iframe className ="bg-gray-900 over"src={Resume} type="application/pdf" height="1600" width="800" zoom="100"></iframe>
        </div>
    );
}