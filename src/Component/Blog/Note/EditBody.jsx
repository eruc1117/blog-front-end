import Form from 'react-bootstrap/Form';

const EditBody = (props) => {
    const writeNote = props.writeNote
    return (
        <Form>
            <Form.Control className='w-75 mx-auto' as="textarea" value={props.noteData.oriNote} 
            onChange={event => {
                const {name, value} = event.target;
                writeNote((preVal) => {
                    return {
                        ...preVal,
                        [name]: value
                    }
                })
                }} name="oriNote" rows={5} />
        </Form>
    )
}

export default EditBody 