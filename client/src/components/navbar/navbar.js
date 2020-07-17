import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

const NavbarMenu = () => (
    <Navbar bg="light">
        <Link to="/"><Navbar.Brand className="styled-nav">Sam Howard Music</Navbar.Brand></Link>
        <Nav className="ml-auto">
            <Link to="/" className="nav-link styled-nav">Home</Link>
            <Link to="/about" className="nav-link styled-nav">About</Link>
            <Link to="/photos&videos" className="nav-link styled-nav">Photos & Videos</Link>
            <Link to="/contact" className="nav-link styled-nav">Contact</Link>
        </Nav>
    </Navbar>
);

export default NavbarMenu;
