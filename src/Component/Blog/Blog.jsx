import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Article from "./Article/Article";
import ArticleEditor from "./Article/ArticleEditor";
import ArticleList from "./ArticleList/ArticleList";
import NodeLeft from "./Note/NoteLeft";
import Button from 'react-bootstrap/Button';

const Blog = (props) => {
    const [artList, setArtList] = useState(true)
    const [articleEdit, setArticleEdit] = useState(false)
    const [artData, setArtData] = useState({})
    const [noteData, setNoteData] = useState({})
    const [userTitles, setUserTitles] = useState([])
    const [createState, setCreateState] = useState(true)

    const hideArtList = () => {
        setArtList(false)
    }
    const displayArtList = () => {
        setArtList(true)
    }

    const createArticle = () => {
        setCreateState(true)
        setArticleEdit(true)
    }
    const editArticle = () => {
        setCreateState(false)
        setArticleEdit(true)
    }
    const cancelEdit = () => {
        setArticleEdit(false)
    }

    const authorId = artData.author_id
    const articleId = props.articleId

    useEffect(() => {
        fetch('http://localhost:4000' + `/api/article/${articleId}`, {
            method: "GET"
        })
           .then((response) => response.json())
           .then((data) => {
                setArtData(JSON.parse(data));
           })
           .catch((err) => {
              console.log(err.message);
           });
        fetch('http://localhost:4000' + `/api/note/${articleId}`, {
            method: "GET"
        })
           .then((response) => response.json())
           .then((data) => {
                setNoteData(JSON.parse(data));
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

     if (authorId) {
        fetch('http://localhost:4000' + `/api/article/title/${authorId}`, {
            method: "GET"
        })
           .then((response) => response.json())
           .then((data) => {;
                setUserTitles(JSON.parse(data));
           })
           .catch((err) => {
              console.log(err.message);
           });
        }

    return (
        <div className="w-75 h-100 mx-auto">
            <div className=" mt-2 position-absolute top-10 start-10">
                {artList ?
                    <Button onClick={hideArtList} variant="dark">Hide</Button> :
                    <Button onClick={displayArtList} variant="dark">Display</Button>
                }
            </div>
            <Row>
                {artList &&
                    <Col >
                        <div className="mt-5 ">
                            <div className="d-flex">
                                <Button onClick={createArticle} className="me-1" variant="dark">Create</Button>
                                <Button onClick={editArticle} className="me-1" variant="dark">Edit</Button>
                                {articleEdit &&
                                    <Button onClick={cancelEdit} className="me-1" variant="dark">Cancel</Button>}
                            </div>
                            <ArticleList titles={userTitles} />
                        </div>
                    </Col>}
                <Col xs={artList ? 10 : 12} >
                    {articleEdit ?
                        <ArticleEditor createState={createState} artData={artData}/> :
                        <Article artData={artData}/>
                    }

                </Col>

            </Row>
                <Col>
                    <NodeLeft updateNote={setNoteData} noteData={noteData} artData={artData}/>
                </Col>

        </div>
    )
}

export default Blog