import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light container="md" expand="md" sticky="top">
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="./images/logo.jpg"
          style={{
            height: 40,
            width: 40
          }}
        />
        <span className="font-weight-normal text-dark m-3">CV Putra Indah Karya</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#expertise">Expertise</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;
