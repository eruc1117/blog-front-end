import Form from 'react-bootstrap/Form';

const EditBody = () => {
    return (
        <Form>
            <Form.Control className='w-75 mx-auto' as="textarea" rows={5} />
        </Form>
    )
}

export default EditBody 