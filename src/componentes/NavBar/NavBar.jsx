import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Samuel Santana da Silva</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#SobreMim">Sobre Mim</Nav.Link>
            <Nav.Link href="#Projetos">Projetos</Nav.Link>
            <Nav.Link href="#Oportunidades">Oportunidades</Nav.Link>
            <Nav.Link href="#Tecnologias">Tecnologias</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
