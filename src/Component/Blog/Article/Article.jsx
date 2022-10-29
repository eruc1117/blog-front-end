import Card from 'react-bootstrap/Card';

const Article = () => {
    return (
        <Card bg='dark' text='white' className='mx-auto mt-5 w-100'>
            <Card.Body >
                <Card.Title className='text-center mb-5'>Card Title</Card.Title>
                <Card.Text className='text-center mt-5'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Article

