/* eslint-disable max-len */
import React, { Component } from 'react';
import './app.css';

import Main from './Main';
import Navigation from './components/Navigation';


export default class App extends Component {
  /*
  state = { username: null };


  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
      {username ? <h1>{`Hello ${username} welcome to BroncoDash`}</h1> : <h1>Loading.. please wait!</h1>}
      //const { username } = this.state;
   }
   */
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <div>

          <Main />

        </div>
      </div>
    );
  }
}
