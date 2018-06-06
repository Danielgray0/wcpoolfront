import React, {Component} from "react";
import {Row, Col, Button, FormGroup, Input, Label, Container, Card, CardHeader, CardBody} from "reactstrap";
import {AUTH_TOKEN} from '../constants';
import {graphql} from 'react-apollo';
import LOGIN_MUTATION from '../mutations/LOGIN_MUTATION'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async () => {
    const {username, password} = this.state;
    const result = await this.props.loginMutation({
      variables: {
        username,
        password,
      },
    });
    const {token} = result.data.tokenAuth;
    this.saveUserData(token);

    this.setState({
      redirect: true
    })
  };

  saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  };

  render() {
    return (
      <Container>
        <Row>
          <Col/>
          <Col>
            <Card>
              <CardHeader>Login</CardHeader>
              <CardBody>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    name="username"
                    type="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
                <Button
                  block
                  disabled={!this.validateForm()}
                  onClick={this.handleSubmit}
                  color="primary"
                >
                  Login
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col/>
        </Row>
      </Container>
    );
  }
}

export default graphql(LOGIN_MUTATION, {name: 'loginMutation'})(LoginForm);