
import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">NaboHjelpen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/about">Om oss</Nav.Link>
            <Nav.Link as={Link} to="/post-ad">Legg ut annonse</Nav.Link>
            <Nav.Link as={Link} to="/ads">Se annonser</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakt oss</Nav.Link>

            <NavDropdown title="Min konto" id="account-dropdown">
              <NavDropdown.Item as={Link} to="/account">Kontooversikt</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account/my-ads">Mine annonser</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account/favorites">Mine favoritter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account/settings">Innstillinger</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
