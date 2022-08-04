import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {Outlet} from "react-router-dom"
export default function Header() {
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home"><strong>#Pets_Test</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/pets">Pets List</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}
