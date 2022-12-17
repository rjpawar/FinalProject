import React from "react";
import {Form, Nav, Navbar} from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';
import { useHistory } from "react-router-dom";


export default function HeaderComponent({isLogin, changeLoginStatus}){
    const history = useHistory();
    return (
        <Navbar expand="lg">
            <a>
                <Navbar.Brand onClick={e => history.push('/')}>
                    <GiEarthAmerica />
                    Tripling
                </Navbar.Brand>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <div className="wd-blank-header"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Nav className="wd-mr-auto">
                        {!isLogin && <Nav.Link onClick={e => history.push('/signin')}>Login</Nav.Link>}
                        <Nav.Link onClick={e => history.push('/profile')}><FaUserCircle /></Nav.Link>
                        {isLogin && <Nav.Link onClick={() => {
                            localStorage.clear();
                            changeLoginStatus(false);
                            history.push('/');
                        }}>Logout</Nav.Link>}
                    </Nav>
                </Form>
            </Navbar.Collapse>
        </Navbar>

    )
}
