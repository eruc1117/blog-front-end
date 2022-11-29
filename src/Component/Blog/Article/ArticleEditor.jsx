import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


const ArticleEditor = (props) => {
    const [article, setArticle] = useState({
      title: "",
      oriArticle: ""
    })

    const upsertArt = props.upsertArt
    const cancelEdit = props.cancelEdit
    const createState = props.createState
    const setArtData = props.setArtData
    const artData = props.artData

    const createtArt = async () => {
      try {
          const requestOptions = {
              method: "PUT",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                id: null,
                authorId: 1,
                title: article.title,
                article: article.oriArticle
              })
          }
          const response = await fetch("http://localhost:4000" + `/api/article`, requestOptions)
          const artJsonData = await response.json()
          setArtData(artJsonData)
      } catch (err) {
        console.log(err)
      }
  }

    const handleSaveArt = (e) => {
      e.preventDefault();
      cancelEdit()
      upsertArt()
    }
    const handleCreateArt = (e) => {
      e.preventDefault();
      cancelEdit()
      createtArt()
    }



    return (
        <Form className='mt-5 bg-dark mx-auto w-100'>
        <Form.Group className="mx-auto w-75">
          <Form.Label className='text-light mt-3'>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" value={createState ? article.title : artData.title} name="title"
          onChange={event => {
            const {name, value} = event.target;

            if (createState) {
              setArticle((preVal) => {
                return {
                    ...preVal,
                    [name]: value
                }
            })
            } else {
              setArtData((preVal) => {
                return {
                    ...preVal,
                    [name]: value
                }
            })
            }
          }}/>
        </Form.Group>
  
        <Form.Group className="mx-auto w-75" controlId="formBasicPassword">
          <Form.Label className='text-light mt-3'>Article</Form.Label>
          <Form.Control  as="textarea" rows={20} value={createState ? article.oriArticle : artData.oriArticle} name="oriArticle"
            onChange={event => {
                const {name, value} = event.target;
                if (createState) {
                  setArticle((preVal) => {
                    return {
                        ...preVal,
                        [name]: value
                    }
                })
                } else {
                  setArtData((preVal) => {
                    return {
                        ...preVal,
                        [name]: value
                    }
                   })
                }
            }}/>
        </Form.Group>
        <div className="mx-auto mt-3 w-25">
        <Button variant="light" className='w-100' type='submit' onClick={createState ? handleCreateArt: handleSaveArt}>
          Save
        </Button>
        </div>
      </Form>
    )
}

export default ArticleEditor

