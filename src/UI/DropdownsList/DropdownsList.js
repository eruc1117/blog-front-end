import React, { useState, useEffect } from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';

const DropdownsList = (props) => {
    const [titles, setTitles] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000' + '/api/article/title/1', {
            method: "GET"
        })
           .then((response) => response.json())
           .then((data) => {;
                setTitles(JSON.parse(data));
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
     const articleItems = titles.map((item) => 
        <NavDropdown.Item key={item.id} href={`/article/${item.id}`}>
           {item.title} 
        </NavDropdown.Item>)

    return (
        <NavDropdown
            id="nav-dropdown-dark-example"
            title={props.title}
            menuVariant="dark"
        >
            {props.title === "article" && articleItems}
        </NavDropdown>
    )
}

export default DropdownsList