import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import './Navigation.css';
import { Button } from "@mui/material";

function Navigation(props) {
    return (
        <Nav className="navbar navbar-expand-sm fixed-top">
          <Container>
            <ImageSearchIcon style={{fontSize: "xx-large", margin: "0 5px 0 5px"}} />
            <a className="navbar-brand">Face Recognition Challenge</a>
            <Nav className="ms-auto justify-content-end">
              {props.isLoggedIn === true
                ? <Button 
                      className="nav-link"
                      onClick={() => props.routeChange("signin")}>
                      Sign out
                    </Button>
                : <div>
                    <Button 
                      className="nav-link"
                      onClick={() => props.routeChange("signin")}>
                      Sign in
                    </Button>
                    <Button 
                      className="nav-link"
                      onClick={() => props.routeChange("register")}>
                      Register
                    </Button>
                  </div>
              }
            </Nav>
          </Container>
      </Nav>
    )
}

export default Navigation;