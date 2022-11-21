import { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const NoteBody = (props) => {

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