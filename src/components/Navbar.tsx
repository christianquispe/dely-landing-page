import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.scss";

export const NavBar: React.FC = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <h1 className="Navbar-title">DELY</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="font-weight-bold Navbar-custom__item"
              href="#about-us"
            >
              Nosotros
            </Nav.Link>
            <Nav.Link
              className="font-weight-bold Navbar-custom__item"
              href="#products-and-services"
            >
              Productos y servicios
            </Nav.Link>
            <Nav.Link
              className="font-weight-bold Navbar-custom__item"
              href="#brands"
            >
              Marcas Dely
            </Nav.Link>
            <Nav.Link
              className="font-weight-bold Navbar-custom__item"
              href="#locate-us"
            >
              Ubícanos
            </Nav.Link>
            <Nav.Link
              className="font-weight-bold Navbar-custom__item"
              href="#contact"
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href="http://www.dely.pe/" target="_blank" rel="noopener noreferrer">
          <Button size="sm" type="primary">
            Consultar Factura / boleta electrónica
          </Button>
        </a>
      </Navbar>
    </Container>
  );
};
