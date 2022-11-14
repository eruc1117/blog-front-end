import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import NoteBody from './NoteBody';
import EditBody from './EditBody';
import NodeBotton from './NoteBotton';

const NodeLeft = (props) => {
    const [edit, setEdit] = useState(false)
    const [note, setNote] = useState("")
    const updateNote = props.updateNote
    const writeNote = (text) => {
        setNote(text)
    }

    const editNote = () => {
        setEdit(true)
    }
    const readNote = () => {
        setEdit(false)
    }
    const noteData = props.noteData

    const articleId = props.artData.id

    const jsonBody = JSON.stringify({
        user_id: 1,
        article_id: articleId,
        note: note
    })
    const createNote = async () => {
        try {

            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: jsonBody
            }
            const response = await fetch("http://localhost:4000" + `/api/note/${articleId}`, requestOptions)
            const noteJsonData = await response.json()
            const noteData = JSON.parse(noteJsonData)
            updateNote(noteData)
        } catch {

        }
    }

    return (
        
        <Card bg='dark' text='white' className='mt-5 mx-auto w-100'>
            <Card.Title className='text-center mt-3'>Note</Card.Title>
            {edit ? <EditBody note={note} writeNote={writeNote}/> : <NoteBody noteData={noteData}/>}
            <NodeBotton habdleOnClick={createNote} editState={edit} onEditNote={editNote} onReadNote={readNote} note={note}/>
        </Card>
    )
}

export default NodeLeft