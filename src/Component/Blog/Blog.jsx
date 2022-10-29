import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Article from "./Article/Article";
import ArticleList from "./ArticleList/ArticleList";
import NodeLeft from "./Note/NoteLeft";

const Blog = () => {
    const [buttomOrLeft, setButtomOrLeft] = useState("left")
    const [artList, setArtList] = useState(true)

    if (false) {
        setButtomOrLeft("test")
    }

    return (
        <div className="w-75 h-100 mx-auto">
            <Row>
                {artList && 
                <Col>
                    <ArticleList />
                </Col>}
                <Col xs={buttomOrLeft === "left" ? 8 : 10} >
                    <Article />
                </Col>
                {buttomOrLeft === "left" &&
                    <Col>
                        <NodeLeft />
                    </Col>}

            </Row>
            {buttomOrLeft !== "left" && <div className="mt-5">
                <NodeLeft />
            </div>}
        </div>
    )
}

export default Blog