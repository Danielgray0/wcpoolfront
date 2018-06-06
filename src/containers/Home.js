import React, {Component} from "react";
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import {Container} from 'reactstrap';
import "./Home.css";
import TeamTable from '../components/TeamTable'

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

    render() {
        return (
            <div className="lander">
                <Container>
                    <TeamTable/>
                </Container>
            </div>
        );
    }
}