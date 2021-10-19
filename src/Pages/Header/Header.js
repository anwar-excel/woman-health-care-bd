import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


import { HashLink } from 'react-router-hash-link';

const Header = () => {
    // const { user, logOut } = useAuth() || {};
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="success">
                <Container>
                    <Navbar.Brand href="#home">Woman Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>

                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>} */}
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;