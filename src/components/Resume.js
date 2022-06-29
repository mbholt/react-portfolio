import React from "react";
import resume1 from "../assets/resume1.jpg";
import resume2 from "../assets/resume2.jpg";

const Resume = () => {
    return (
        <section id="resume">
            <div>
                <img src={resume1} alt="Myles Holt Resume" style={{maxWidth: "100%", height: "auto"}} />
            </div>
            <div>
                <img src={resume2} alt="Myles Holt Resume" style={{maxWidth: "100%", height: "auto"}} />
            </div>
        </section>
    )
};

export default Resume;