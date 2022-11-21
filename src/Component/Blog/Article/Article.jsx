import { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const Article = (props) => {
    const data = props.artData
    return (
        <Card bg='dark' text='white' className='mx-auto mt-5 w-100'>
            <Card.Body >
                <Card.Title className='text-center w-75 mb-5 mx-auto'>{data.title}</Card.Title>
                
                <div className='w-75 mx-auto'>
                    <Fragment>
                        <div dangerouslySetInnerHTML={ { __html: data.article}} >
                        </div>
                    </Fragment>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Article

