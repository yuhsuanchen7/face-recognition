import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import './Navigation.css';

function Navigation() {
    return (
        <Nav className="navbar navbar-expand-sm ">
          <Container>
            <ImageSearchIcon style={{fontSize: "xx-large", margin: "0 5px 0 5px"}} />
            <a className="navbar-brand" href="/">Face Recognition Challenge</a>
            <Nav className="ms-auto justify-content-end">
              <a className="nav-link" href="">Sign Out</a>
            </Nav>
          </Container>
      </Nav>
    )
}

export default Navigation;