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
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#feature">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#service">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;