import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      loaded: false,
      loggedIn: false,
      username: null
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 500);
    });
  }

  render() {
    const { loaded, loading } = this.state;
    return (
      <div>
        {!loaded &&
          <div className={`load${loading ? '' : ' loaded'}`}>
            <div className="load__icon-wrap">
              <div className="bronco_dash_loading_containter">
                <div className="dash uno"/>
                <div className="dash dos"/>
                <div className="dash tres"/>
                <div className="dash cuatro"/>
              </div>
            </div>
          </div>
        }
        <div>
          <Router />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
