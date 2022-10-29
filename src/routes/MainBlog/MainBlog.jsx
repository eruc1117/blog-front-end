import React from 'react';
import { Helmet } from 'react-helmet';

import BasicNavbar from '../../UI/Navbar/BasicNavbar';
import Blog from '../../Component/Blog/Blog';
import './MainBlog.css';


class MainBlog extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #424242; }'}</style>
                </Helmet>
                <div className='main-body'>
                    <BasicNavbar />
                    <Blog />
                </div>
            </div>
        )
    }
}

export default MainBlog;