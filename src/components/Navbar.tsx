import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo-web/logo-web.png";

export const NavBar: React.FC = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <img style={{ width: "100px" }} src={logo} />
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
              href="#services"
            >
              Servicios
            </Nav.Link>
            <Nav.Link
              className="font-weight-bold Navbar-custom__item"
              href="#products"
            >
              Productos
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
        <a href="http://148.102.127.166:9090/DelyConsorcio/" target="_blank" rel="noopener noreferrer">
          <Button size="sm" type="primary">
            Consultar Factura / boleta electrónica
          </Button>
        </a>
      </Navbar>
    </Container>
  );
};
