import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import DropdownsList from '../DropdownsList/DropdownsList';

function BasicNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className='mx-auto w-100'>
                <Navbar.Brand href="/" className="fs-2 my-0 py-0">Eruc Blog</Navbar.Brand>
                <Navbar.Collapse id="navbar-nav" className='h-100'>
                    <Nav className="ms-5">
                        <DropdownsList title={"article"}/>
                        <DropdownsList title={"user"} />
                        <Form.Control className='ms-5' type="email" placeholder="Name or Id" />
                        <Button variant="dark">Search</Button>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-flex flex-row'>
                    <Card body bg="dark" className='text-white'>Login User Name or Null</Card>
                    <Button variant="dark">login</Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default BasicNavbar