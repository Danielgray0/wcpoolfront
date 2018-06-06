import React, {Component} from 'react';
import logo from './logo1.png';
import './App.css';
import Navigation from "./components/Navigation"
import Routes from "./Routes";
import {AUTH_TOKEN} from './constants';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Routes/>
            </div>
        )
    }
}

export default App;
