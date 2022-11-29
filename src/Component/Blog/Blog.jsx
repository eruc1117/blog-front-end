import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Article from "./Article/Article";
import ArticleEditor from "./Article/ArticleEditor";
import ArticleList from "./ArticleList/ArticleList";
import NodeLeft from "./Note/NoteLeft";
import Button from 'react-bootstrap/Button';
import { useCallback } from 'react';

const Blog = (props) => {
    const [artList, setArtList] = useState(true)
    const [articleEdit, setArticleEdit] = useState(false)
    const [artData, setArtData] = useState({
        id: "",
        authorId: "",
        title: "",
        article: ""
    })
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

    const articleId = props.articleId
    const loadBlogFunction = useCallback(() => {
        fetch('http://localhost:4000' + `/api/article/${articleId}`, {
            method: "GET"
        })
           .then((response) => response.json())
           .then((data) => {
                const artData = JSON.parse(data)
                setArtData(artData);
           })
           .catch((err) => {
              console.log(err.message);
           });
        fetch('http://localhost:4000' + `/api/note/${articleId}`, {
            method: "GET"
        })
           .then((response) => 
            response.json())
           .then((data) => {
                const noteJsonData = JSON.parse(data)
                setNoteData(noteJsonData);
           })
           .catch((err) => {
              console.log(err.message);
           });
    }, [])
    useEffect(() => {
        loadBlogFunction()
     }, []);
     
     fetch('http://localhost:4000' + `/api/article/title/${1}`, {
        method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
            let titleData = JSON.parse(data)
            titleData.sort((a, b) => {
                return Number(a.id) - Number(b.id)
            })
            setUserTitles(titleData);
       })
       .catch((err) => {
          console.log(err.message);
       });



        const artJosnBody = JSON.stringify({
            id: artData.id,
            authorId: artData.authorId,
            title: artData.title,
            article: artData.oriArticle
        })

        const upsertArt = async () => {
            try {
                const requestOptions = {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: artJosnBody
                }
                const response = await fetch("http://localhost:4000" + `/api/article`, requestOptions)
                const artJsonData = await response.json()
                setArtData(artJsonData)

                const newTitles = []
                for (let i = 0; i < [...userTitles].length; i++) {
                    let item = [...userTitles][i]
                    if(item.id === artJsonData.id) {
                        item.title = artJsonData.title
                    }
                    newTitles.push(item)
                }
                newTitles.sort((a, b) => {
                    return Number(a.id) - Number(b.id)
                })
                setUserTitles(newTitles)
            } catch (err) {
                console.log(err)
            }
        }

    return (
        <div className="w-75 h-100 mx-auto">
            <div className=" mt-2 position-absolute top-10 start-10">
                {artList ?
                    <Button onClick={hideArtList} variant="dark">Hide</Button> :
                    <Button onClick={displayArtList} variant="dark">Display</Button>
                }
                 <Button onClick={createArticle} className="me-1" variant="dark">Create</Button>
            </div>
            <Row>
                {artList &&
                    <Col >
                        <div className="mt-5 ">
                            <div className="d-flex">
                                <Button onClick={editArticle} className="me-1" variant="dark">Edit</Button>
                                {articleEdit &&
                                    <Button onClick={cancelEdit} className="me-1" variant="dark">Cancel</Button>}
                            </div>
                            <ArticleList titles={userTitles} />
                        </div>
                    </Col>}
                <Col xs={artList ? 10 : 12} >
                    {articleEdit ?
                        <ArticleEditor setArtData={setArtData} artData={artData} cancelEdit={cancelEdit} upsertArt={upsertArt} createState={createState} /> :
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