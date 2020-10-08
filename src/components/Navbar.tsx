import React from "react";
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './Navbar.scss'
import logo from '../assets/logo.jpg'



export const NavBar: React.FC = () => {
	return (
		<Container>
			<Navbar bg="light" expand="lg">
			  <Navbar.Brand href="#">
			  	<img className="logo" src={logo} />
			  </Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="ml-auto">
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#home">Home</Nav.Link>
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#link">Link large</Nav.Link>
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#home">Home</Nav.Link>
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#link">Link short</Nav.Link>
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#home">Home</Nav.Link>
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#link">Link dafsa</Nav.Link>
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#home">Home</Nav.Link>
			      <Nav.Link  className="font-weight-bold Navbar-custom__item" href="#link">Linkfasfsa</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>		
		</Container>
	)
}
