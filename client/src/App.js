import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Link to="/"><Navbar.Brand className="styled-nav">Sam Howard Music</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link styled-nav">Home</Link>
              <Link to="/about" className="nav-link styled-nav">About</Link>
              <Link to="/photos&videos" className="nav-link styled-nav">Photos & Videos</Link>
              <Link to="/contact" className="nav-link styled-nav">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/">
        </Route>
      </div>
    </Router >
  );
}

export default App;
