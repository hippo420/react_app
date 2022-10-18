import { Button } from "@mui/material";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = ()=>{
    console.log("render....");

        return(
            <Navbar bg="black" variant="dark">
                <Container>
                <Navbar href="home">메뉴</Navbar>
                <Nav className="me-auto">
                    <Nav.Link to="/" border="white">Home</Nav.Link>
                    <Nav.Link to="/login" >login</Nav.Link>
                    <Nav.Link to="pricing">가격</Nav.Link>
                </Nav>
                
                </Container>
            </Navbar>
        );
    
    
}

export default Header;