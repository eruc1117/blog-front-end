import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Article from "./Article/Article";
import ArticleList from "./ArticleList/ArticleList";
import NodeLeft from "./Note/NoteLeft";
import NodeBottom from "./Note/NoteBottom";

const Blog = () => {
    return (
        <Container className="w-100 h-100">
            <Row>
                <Col>
                    <ArticleList />
                </Col>
                <Col xs={6} >
                    <Article />
                </Col>
                <Col>
                    <NodeLeft />
                </Col>
            </Row>
            <div className="mt-5">
                <NodeBottom />
            </div>
        </Container>
    )
}

export default Blog