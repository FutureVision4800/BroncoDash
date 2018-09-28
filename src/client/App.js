import React, { Component } from 'react';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import UserSignUp from './components/UserSignUp';
import UserLogin from './components/UserLogin';
import SignIn from './components/SignIn';
import Navigation from './components/Navigation';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <header>
          <Navigation />
        </header>

        <div>
          {username ? <h1>{`Hello ${username} welcome to BroncoDash`}</h1> : <h1>Loading.. please wait!</h1>}
        </div>
      </div>
    );
  }
}
