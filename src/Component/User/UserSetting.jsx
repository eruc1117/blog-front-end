import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const UserSetting = () => {
    return (
        <Card.Body>
            <Card.Text className='mx-auto mt-5 w-75'>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>Id</Col>
                    <Col sm={8} style={{ textAlign: 'center', fontSize: '30px' }}>00001</Col>
                </Row>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>Account</Col>
                    <Col sm={8} style={{ textAlign: 'center', fontSize: '30px' }}>Eruc</Col>
                </Row>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>Password</Col>
                    <Col sm={8} style={{ textAlign: 'center', fontSize: '30px' }}>eruc101010@gmail.com</Col>
                </Row>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>Note Side</Col>
                    <Col sm={8} >
                        <Form.Select className='mx-auto w-50' aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Card.Text>
        </Card.Body >
    )
}

export default UserSetting
