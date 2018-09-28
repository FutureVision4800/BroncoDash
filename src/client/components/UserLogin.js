import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactDOM from "react-dom";
import App from "../App";


export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          <TextField type="text" placeholder="USERNAME" onChange={event => this.setState({ username: event.target.value })} />
        </div>
        <div>
          <TextField type="text" placeholder="PASSWORD" onChange={event => this.setState({ password: event.target.value })} />
        </div>
        <div>
          <Button color="primary" variant="contained" onClick={() => this.logIn()}>SIGN IN</Button>
        </div>
      </div>

    );
  }
}

