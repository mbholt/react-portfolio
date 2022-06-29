import React from "react";

const Portfolio = () => {
    return (
        <section id="projects" className="work">
            <h4>Projects</h4>
            <div className="projects">
                <a className="project1" title="Link to Live-Hire" href="https://gentle-dawn-52689.herokuapp.com/">
                    <div className="project-description">
                        <h5>Live-Hire</h5>
                        <p>HTML/CSS/JavaScript/Node/Handlebars</p>
                    </div>
                </a>

                <div className="projects-middle">
                    <a className="project2" title="Link to Note Eater" href="https://foglea10.github.io/Note-Eater/">
                        <div className="project-description">
                            <h5>Note Eater</h5>
                            <p>JavaScript/CSS</p>
                        </div>
                    </a>
                    <a className="project3" title="Link to 4D Rhyming Dictionary" href="https://github.com/">
                        <div className="project-description">
                            <h5> 4D Rhyming Dictionary</h5>
                            <p>MERN Stack</p>
                        </div>    
                    </a>
                </div>
                <div className="projects-bottom">
                    <a className="project4" title="Link to Goose Phenotype Tracker" href="https://github.com/">
                        <div className="project-description">
                            <h5>Goose Phenotype Tracker</h5>
                            <p>React/JavaScript/CSS</p>
                        </div>    
                    </a>
                    <a className="project5" title="Link to Borscht Recipe Compendium" href="https://github.com/">
                        <div className="project-description">
                            <h5>Borscht Recipe Compendium</h5>
                            <p>Node/IoT</p>
                        </div>    
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;