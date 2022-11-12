import { useState } from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import DropdownsList from '../DropdownsList/DropdownsList';

function BasicNavbar() {
    const [loginState, setLoginState] = useState(true)

    return (
        <Navbar bg="dark" variant="dark">
            <div className='d-flex w-75 mx-auto'>
                <Navbar.Brand href="/" className="fs-2 my-0 py-0">Eruc</Navbar.Brand>
                <Navbar.Collapse id="navbar-nav" className='h-100'>
                    <Nav className="ms-5">
                        <DropdownsList title={"article"} />
                        <DropdownsList title={"user"} />
                        <Form.Control type="email" placeholder="Name or Id" />
                        <Button variant="dark">Dark</Button>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-flex flex-row'>
                    {loginState &&
                        <Link className='my-auto' to={`/user`} style={{ textDecoration: "none", color: 'white' }}>
                            User Profile
                        </Link>}
                    <Button className='ms-3' variant="light">
                        <Link className='my-auto' to={`/login`} style={{ textDecoration: "none", color: 'black' }}>
                            Login
                        </Link>
                    </Button>
                </div>
            </div>
        </Navbar>
    );
}

export default BasicNavbar