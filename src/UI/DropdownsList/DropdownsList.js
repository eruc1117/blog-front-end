import React from "react";
import { Link } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';


const DropdownsList = (props) => {
    return (
        <NavDropdown
            id="nav-dropdown-dark-example"
            title={props.title}
            menuVariant="dark"
        >
            <NavDropdown.Item>
                <Link to={`/test`}>Main Blog</Link>
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default DropdownsList