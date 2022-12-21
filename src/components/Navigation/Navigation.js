import React from "react";
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Nav class="navbar navbar-expand-sm fixed-top navbar-light" style={{padding: "20px 0 20px 0"}}>
        <Container>
            <a className="navbar-brand" href="/">Face Recognition Challenge</a>
            <Nav className="ms-auto justify-content-end">
              <a class="nav-link" href="">Sign Out</a>
            </Nav>
        </Container>
      </Nav>
    )
}

export default Navigation;