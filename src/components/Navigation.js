import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {AUTH_TOKEN} from '../constants';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.logout = this.logout.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout() {
        localStorage.removeItem(AUTH_TOKEN)
        this.setState()
    }

    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN);
        return (
            <Navbar color="light" light expand="md" tabs>
                <NavbarBrand href="/">WorldCup</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    {authToken ?
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Pools</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Draft</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar right>
                                <DropdownToggle nav caret>
                                    Hi! Dan
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Account
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem onClick={this.logout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        :
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login/">Sign Up/Login</NavLink>
                            </NavItem>
                        </Nav>
                    }
                </Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
