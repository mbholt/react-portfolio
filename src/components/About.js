import React from "react";
import bioImage from "../assets/myles.jpeg";

const About = () => {
    return (
        <section id="about" className="bio">
            <div className="bioleft">
                <h3>About Me</h3>
                <div className="flex-row">
                    <img src={bioImage} alt="Myles Holt and his dog (Gideon)" className="img-thumbnail mx-1" />
                </div>
            </div>
            <div className="bioright">
                <p>
                    The address farther six hearted hundred towards husband. Are securing off occasion remember daughter replying. Held that feel his see own yet. Strangers ye to he sometimes propriety in. She right plate seven has. Bed who perceive judgment did marianne.    
                </p>
                <p>
                    Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no pretty as do though so genius afraid cousin. Girl when of ye snug poor draw. Mistake totally of in chiefly. Justice visitor him entered for. 
                </p>
                <p>
                    Boy desirous families prepared reserved add ecstatic say. Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor. Use fine bed none call busy dull when quiet right by.
                </p>
            </div>
        </section>
    );
}

export default About;