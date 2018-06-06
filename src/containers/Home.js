import React, {Component} from "react";
import {
  Container,
  Table,
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
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import "./Home.css";

const query = gql`
  query {
    teams {
      id
      country
      icon
      group
      points
    }
  }
`;

export default class Home extends Component {

    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderTeams(teams) {
    return teams.map(({id, country, icon, points}) => (
        <tr key={id}>
          <td><span className={`flag-icon flag-icon-${icon}`}/></td>
          <td>
            {country}
          </td>
          <td>{points}</td>
        </tr>
      )
    )
  }



  render() {
    return (
      <div className="Home">
        <Container>
          <div>
            <Navbar color="dark" navbar navbar-dark bg-dark>
                <NavbarBrand href="/">WorldCupBoy</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="home-nav" navbar pullRight>
                        <NavItem>
                            <NavLink href="/signup/">Signup</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login/">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
          </div>
          <div className="lander">
            <h1>Cupology</h1>
            <p>Ur mom gay</p>

            <Query query={query}>
              {({loading, error, data}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                  <Table>
                    <thead>
                    <tr>
                      <th>Flag</th>
                      <th>Country</th>
                      <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTeams(data.teams)}
                    </tbody>
                  </Table>
                );
              }}
            </Query>
          </div>
        </Container>
      </div>
    );
  }
}