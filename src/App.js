import React, {Component} from 'react';
import logo from './logo1.png';
import './App.css';
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar, NavItem} from "reactstrap";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    )
  }
}

export default App;
