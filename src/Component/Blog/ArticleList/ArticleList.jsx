import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const ArticleList = (props) => {

    const titleList = props.titles

    const listJsx = titleList.map(item => 
            <ListGroup.Item as="a" key={item.id} href={`/article/${item.id}`} variant="dark">
                {item.title} 
            </ListGroup.Item>
        )

    return (
        <ListGroup  className='mt-2' numbered>
            {listJsx}
        </ListGroup>
    );
}

export default ArticleList;