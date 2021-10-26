import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar className="navbar-color" sticky="top" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{ color: 'white', fontWeight: '500' }} as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link style={{ color: 'white', fontWeight: '500' }} as={HashLink} to="/home#about">About us</Nav.Link>
            <Nav.Link style={{ color: 'white', fontWeight: '500' }} as={HashLink} to="/home#treatment">Treatments</Nav.Link>
            <Nav.Link style={{ color: 'white', fontWeight: '500' }} as={HashLink} to="/home#specialist">Specialist</Nav.Link>
            <Nav.Link style={{ color: 'white', fontWeight: '500' }} as={HashLink} to="/home#appoinment">Appoinment</Nav.Link>
            {
              user.email ?
                <Button onClick={logOut} style={{ color: 'white', fontWeight: '500'}} className="mx-3">Logout</Button>
                :
                <Nav.Link style={{ color: 'white', fontWeight: '500' }} as={Link} to="/login">Login</Nav.Link>
            }
            <Navbar.Text>
              Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto">

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;