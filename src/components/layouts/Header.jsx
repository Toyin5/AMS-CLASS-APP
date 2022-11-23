import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    function handleClick(e) {
        e.preventDefault();
        setOpen(!isOpen);
    }

    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <span className="icon-text">
                            <span className="icon is-white">
                                <Link to="/"><FaHome /></Link>
                            </span>
                            <Link to="/"><span>AMS</span></Link>
                        </span>

                    </div>
                    <a
                        role="button"
                        href="/"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={handleClick}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeclassname="is-active" to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeclassname="is-active"
                            to="/register"
                        >
                            Register/Log In
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeclassname="is-active"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;