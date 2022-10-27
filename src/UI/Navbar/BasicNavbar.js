import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="ms-1">
                <Navbar.Brand className="ms-2" href="#home">Eruc</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BasicNavbar