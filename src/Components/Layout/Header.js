import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

export default function Header() {
  return (
    <React.Fragment>
      <h1 className="text-center text-primary mt-3">Todo's</h1>
      
      <Navbar className="p-0 mb-1" expand="md">
        <Nav className="ml-auto">
          <NavItem className="pr-1">
            <Link className="text-center text-primary" to="/">home</Link>
          </NavItem>
          |
          <NavItem className="pl-1">
            <Link className="text-center text-primary" to="/about">about</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  )
}
