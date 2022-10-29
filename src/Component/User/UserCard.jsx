import { useState } from 'react'

import UserProfile from './UserProfile';
import UserSetting from './UserSetting';

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const UserCard = () => {
    const [page, setPage] = useState('user')

    const selectUser = () => {
        setPage("user")
    }

    const selectSetting = () => {
        setPage("setting")
    }

    return (
        <Card bg='dark' text='white' className='w-75 mx-auto mt-5'>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first" >
                    <Nav.Item>
                        <Nav.Link href="#user" onClick={selectUser} style={{ textDecoration: "none", color: 'gray' }}>User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#setting" onClick={selectSetting} style={{ textDecoration: "none", color: 'gray' }}>Setting</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            {page === "user" && <UserProfile/>}
            {page === "setting" && <UserSetting />}
        </Card>
    )
}

export default UserCard