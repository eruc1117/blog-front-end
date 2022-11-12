import React from "react";
import Card from 'react-bootstrap/Card';

const Article = (props) => {
    const data = props.artData
    return (
        <Card bg='dark' text='white' className='mx-auto mt-5 w-100'>
            <Card.Body >
                <Card.Title className='text-center mb-5'>{data.title}</Card.Title>
                <Card.Text className='text-center mt-5'>
                   {data.article}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Article

