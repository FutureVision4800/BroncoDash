import React, { Component } from 'react';
import './componentStyles/Navigation.css';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';


const Navigation = () => (
  <div>
    <Navbar inverse>
      <Navbar.Form pullLeft>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
          Bronco Dash
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>

        <Nav>
          <LinkContainer to="/info">
            <NavItem>
            Info
            </NavItem>
          </LinkContainer>
          <NavItem eventKey={2} href="#">
                    Link
          </NavItem>
        </Nav>
      </Navbar.Form>
      <Nav pullRight>
        <LinkContainer to="/login">
          <NavItem>
                    Log In
          </NavItem>
        </LinkContainer>
        <NavItem eventKey={2} href="#">
                    Profile
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>

    </Navbar>

  </div>
);

export default Navigation;
