import Form from 'react-bootstrap/Form';

const EditBody = (props) => {
    const writeNote = props.writeNote

    return (
        <Form>
            <Form.Control className='w-75 mx-auto' as="textarea" value={props.note} onChange={e => writeNote(e.target.value)} rows={5} />
        </Form>
    )
}

export default EditBody 