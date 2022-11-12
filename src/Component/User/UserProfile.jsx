import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UserProfile = () => {
    return (
        <Card.Body>
            <Card.Text className='mx-auto mt-5 w-75'>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>Id</Col>
                    <Col sm={8} style={{ textAlign: 'center', fontSize: '30px' }}>00001</Col>
                </Row>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>Name</Col>
                    <Col sm={8} style={{ textAlign: 'center', fontSize: '30px' }}>Eruc</Col>
                </Row>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>Email</Col>
                    <Col sm={8} style={{ textAlign: 'center', fontSize: '30px' }}>eruc101010@gmail.com</Col>
                </Row>
                <Row>
                    <Col sm={4} style={{ textAlign: 'center', fontSize: '30px' }}>文章數</Col>
                    <Col sm={8} style={{ textAlign: 'center', fontSize: '30px' }}>00001</Col>
                </Row>
            </Card.Text>
        </Card.Body >
    )
}

export default UserProfile
