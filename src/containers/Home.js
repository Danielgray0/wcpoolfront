import React, {Component} from "react";
import {
  Container,
  Table
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