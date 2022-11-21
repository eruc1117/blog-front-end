import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import NoteBody from './NoteBody';
import EditBody from './EditBody';
import NodeBotton from './NoteBotton';

const NoteLeft = (props) => {

    const noteData = props.noteData
    const [edit, setEdit] = useState(false)
    const updateNote = props.updateNote

    const editNote = () => {
        setEdit(true)
    }
    const readNote = () => {
        setEdit(false)
    }

    const articleId = props.artData.id

    const jsonBody = JSON.stringify({
        reader_id: 1,
        article_id: articleId,
        note: (noteData["oriNote"])
    })
    const createNote = async () => {
        try {
            const requestOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: jsonBody
            }
            const response = await fetch("http://localhost:4000" + `/api/note/${articleId}`, requestOptions)
            const noteJsonData = await response.json()
            const data = JSON.parse(noteJsonData)
            updateNote(data)
        } catch {

        }
    }
    return (
        
        <Card bg='dark' text='white' className='mt-5 mx-auto w-100'>
            <Card.Title className='text-center mt-3'>Note</Card.Title>
            {edit ? <EditBody noteData={noteData} writeNote={updateNote}/> : <NoteBody noteData={noteData}/>}
            <NodeBotton habdleOnClick={createNote} editState={edit} onEditNote={editNote} onReadNote={readNote} note={noteData.note}/>
        </Card>
    )
}

export default NoteLeft