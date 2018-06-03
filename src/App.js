import React, { Component } from 'react';
import logo from './logo1.png';
import './App.css';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">

            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Cupology</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer to="/signup">
                        <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <NavItem>Login</NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
