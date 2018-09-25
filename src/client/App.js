import React, { Component } from 'react';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import UserSignUp from './components/UserSignUp';
import UserLogin from './components/UserLogin';
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
        {username ? <h1>{`Hello ${username} welcome to BroncoDash`}</h1> : <h1>Loading.. please wait!</h1>}

        <BrowserRouter>
          <div>
            <Navigation>
              <switch>
                <Route path="/login" component={UserLogin} />
                <Route path="/signup" component={UserSignUp} />
              </switch>
            </Navigation>
          </div>
        </BrowserRouter>

      </div>

    );
  }
}
