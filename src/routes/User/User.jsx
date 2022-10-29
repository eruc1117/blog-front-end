import React from 'react';
import { Helmet } from 'react-helmet';

import BasicNavbar from '../../UI/Navbar/BasicNavbar';
import UserCard from '../../Component/User/UserCard';
import './User.css';


class User extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #424242; }'}</style>
                </Helmet>
                <div className='main-body'>
                    <BasicNavbar />
                    <UserCard/>
                </div>
            </div>
        )
    }
}

export default User;