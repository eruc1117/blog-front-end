import Card from 'react-bootstrap/Card';

const NoteBody = (props) => {
    const noteData =props.noteData
    return (
        <Card.Body >
            <Card.Text className='text-center'>
                {noteData.note}
            </Card.Text>
        </Card.Body>
    )
}

export default NoteBody