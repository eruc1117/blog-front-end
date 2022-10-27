import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import DropdownsList from '../DropdownsList/DropdownsList';

function BasicNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className='mx-auto w-100'>
                <Navbar.Brand href="#home" className="fs-2 my-0 py-0">Eruc</Navbar.Brand>
                <Navbar.Collapse id="navbar-nav" className='h-100'>
                    <Nav className="ms-5">
                        <DropdownsList/>
                        <DropdownsList/>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="dark">Dark</Button> 
            </Container>
        </Navbar>
    );
}

export default BasicNavbar