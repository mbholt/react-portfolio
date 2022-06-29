import React, { useState } from "react";

const Header = () => {
    return (
        <header className="flex-row">
            <h2>
                <a href="/">
                    Portfolio: Myles Holt
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#projects">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;