import { useEffect, useState, Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const NoteBody = (props) => {
    const [noteState, setNoteText] = useState(props)
    useEffect(() => {
        setNoteText(props)
    }, [props.noteData.note])
    return (
        <Card.Body>
            <div className='w-75 mx-auto'>
             <Fragment>
                <div dangerouslySetInnerHTML={ { __html: props.noteData.note}} >
                </div>
            </Fragment>
            </div>
        </Card.Body>
    )
}

export default NoteBody