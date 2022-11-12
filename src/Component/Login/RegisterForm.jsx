import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = (props) => {
    return (
        <Card className='w-75 mt-5 mx-auto' bg='dark' text='light' >
            <Card.Header className='w-75 mx-auto' style={{ fontSize: '36px' }}>Register</Card.Header>
            <Card.Body className='w-75 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='mb-3' type="password" placeholder="Password" />
                        <Form.Label>Check Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='my-3'>
                        <p onClick={props.onSwitch} style={{ textDecoration: "none", color: 'white' }} >Login</p>
                    </div>
                    <div>
                        <Button variant="secondary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default RegisterForm