import React from 'react';

import Button from 'react-bootstrap/Button';

class NodeBotton extends React.Component {
    constructor(props) {
        super(props)
        this.editNote = this.props.onEditNote
        this.readNote = this.props.onReadNote
    }

    render() {
        return (
            <div className='mt-2 mb-2 mx-auto w-75'>
                {this.props.editState ? // 用 constructir 建立的不會隨著 parent component 更新，考屢哪部分搞錯
                    <Button className='w-100' onClick={this.readNote} variant="light">儲存</Button> :
                    <Button className='w-100' onClick={this.editNote} variant="light">編輯</Button>}
            </div>
        )
    }
}


export default NodeBotton