import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: ''
    };
  }

  logIn() {
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div>
        <div>
          <TextField type="text" placeholder="NAME" onChange={event => this.setState({ name: event.target.value })} />
        </div>
        <div>
          <TextField type="text" placeholder="E-MAIL" onChange={event => this.setState({ email: event.target.value })} />
        </div>
        <div>
          <TextField type="text" placeholder="USERNAME" onChange={event => this.setState({ username: event.target.value })} />
        </div>
        <div>
          <TextField type="text" placeholder="PASSWORD" onChange={event => this.setState({ password: event.target.value })} />
        </div>
        <div>
          <Button color="primary" variant="contained" onClick={() => this.logIn()}>SIGN UP</Button>
        </div>
      </div>

    );
  }
}
