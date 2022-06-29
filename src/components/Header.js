import React, { useState } from "react";

function Header(props) {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <section>
            <header>
                <h2>
                    <a href="/" className="page-title">
                        Portfolio: Myles Holt
                    </a>
                </h2>
                <nav>
                    <ul className="flex-row">
                        <li>
                            <a data-testid="about" 
                            onClick={() => {
                                setAboutSelected(true);
                                setPortfolioSelected(false);
                                setResumeSelected(false);
                                setContactSelected(false)
                            }}>
                                About Me
                            </a>
                        </li>
                        <li>
                            <a data-testid="projects" 
                            onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(true);
                                setResumeSelected(false);
                                setContactSelected(false)
                            }}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a data-testid="contact" 
                            onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(false);
                                setResumeSelected(false);
                                setContactSelected(true)
                            }}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a data-testid="resume" 
                            onClick={() => {
                                setAboutSelected(false);
                                setPortfolioSelected(false);
                                setResumeSelected(true);
                                setContactSelected(false)
                            }}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
        </header>
        <div className="hero">
            <h2>A Coder For All Seasons</h2>
        </div>
    </section>
    );
}

export default Header;