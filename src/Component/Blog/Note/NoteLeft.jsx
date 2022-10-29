import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import NoteBody from './NoteBody';
import EditBody from './EditBody';
import NodeBotton from './NoteBotton';

const NodeLeft = () => {
    const [edit, setEdit] = useState(false)

    const editNote = () => {
        setEdit(true)
    }
    const readNote = () => {
        setEdit(false)
    }

    return (
        
        <Card bg='dark' text='white' className='mt-5 mx-auto w-100'>
            <Card.Title className='text-center mt-3'>Note</Card.Title>
            {edit ? <EditBody /> : <NoteBody />}
            <NodeBotton editState={edit} onEditNote={editNote} onReadNote={readNote}/>
        </Card>
    )
}

export default NodeLeft