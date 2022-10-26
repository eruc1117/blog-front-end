import React from "react";

import DropButtonGroup from "../DropButtonGroup/DropButtonGroup";

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <h2 className="Navbar-title">Blog</h2>
            <DropButtonGroup/>
            <button className="Navbar-button"> USER </button>
        </div>
    )
}

export default Navbar