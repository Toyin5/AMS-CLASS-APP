import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const token = JSON.parse(localStorage.getItem("token"))
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
                            <Link to="/"><span>{token.course_code}</span></Link>
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
                        <NavLink className="navbar-item" activeclassname="is-active" to="/app">
                            DashBoard
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeclassname="is-active"
                            to="/app/register"
                        >
                            Register
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeclassname="is-active"
                            to="/app/profile"
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            className="navbar-item"
                            activeclassname="is-active"
                            to="/app/attendance"
                        >
                            Attendance
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header