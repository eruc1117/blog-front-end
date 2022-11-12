import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const ArticleEditor = () => {
    return (
        <Card bg='dark' text='white' className='mx-auto mt-5 w-100'>
            <Card.Body >
                <Card.Title className='text-center'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control className='w-75 mx-auto bg-secondary text-white' type="text" />
                    </Card.Title>
                <Card.Text className='text-center mt-3'>
                    <Form.Label>Article</Form.Label>
                    <Form.Control className='w-75 mx-auto bg-secondary text-white' as="textarea" rows={20} />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ArticleEditor

