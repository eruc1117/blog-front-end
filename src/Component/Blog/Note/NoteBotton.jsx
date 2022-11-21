import React from 'react';

import Button from 'react-bootstrap/Button';

const NodeBotton = (props) => {
    const onReadNote = props.onReadNote
    const createNote = props.habdleOnClick

    const handleSaveNote = () => {
        createNote()
        onReadNote()
    }

    return (
        <div className='mt-2 mb-2 mx-auto w-75 d-flex'>
            <div className='w-50 d-flex justify-content-center'>
            {props.editState ?
                <Button className='w-75' onClick={handleSaveNote} variant="light">儲存</Button> :
                <Button className='w-75' onClick={props.onEditNote} variant="light">編輯</Button>}
            </div>
            <div className='w-50 d-flex justify-content-center'>
            {props.editState && <Button className='me-0 w-75' onClick={onReadNote} variant="light">取消</Button> }
            </div>
            
        </div>
    )
}

export default NodeBotton