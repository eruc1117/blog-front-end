import Card from 'react-bootstrap/Card';

const NodeBottom = () => {
    return (
        <Card bg='dark' text='white' className='mx-auto w-75'>
            <Card.Body >
                <Card.Title className='text-center mb-5'>Card Title</Card.Title>
                <Card.Text className='text-left mt-5'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NodeBottom