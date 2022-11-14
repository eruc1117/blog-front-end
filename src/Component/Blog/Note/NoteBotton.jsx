import React from 'react';

import Button from 'react-bootstrap/Button';

const NodeBotton = (props) => {
    const onReadNote = props.onReadNote
    const createNote = props.habdleOnClick

    const handleSaveNote = async () => {
        createNote()
        onReadNote()
    }

    return (
        <div className='mt-2 mb-2 mx-auto w-75'>
            {props.editState ?
                <Button className='w-100' onClick={handleSaveNote } variant="light">儲存</Button> :
                <Button className='w-100' onClick={props.onEditNote} variant="light">編輯</Button>}
        </div>
    )
}

export default NodeBotton