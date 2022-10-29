import React from 'react';
import { Helmet } from 'react-helmet';

import BasicNavbar from '../UI/Navbar/BasicNavbar'
import Home from '../Component/Home/Home';
import './Root.css';


class Root extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #424242; }'}</style>
                </Helmet>
                <div className='main-body'>
                    <BasicNavbar />
                    <Home />
                </div>
            </div>
        )
    }
}

export default Root;