import React from "react";
import { Link } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';


const DropdownsList = () => {
    return (
        <NavDropdown
            id="nav-dropdown-dark-example"
            title="Dropdown"
            menuVariant="dark"
        >
            <NavDropdown.Item >Action</NavDropdown.Item>
            <NavDropdown.Item>
                <Link to={`/test`}>Main Blog</Link>
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default DropdownsList