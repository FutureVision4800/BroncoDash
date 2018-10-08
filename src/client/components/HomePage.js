import React, { Component } from 'react';
import './componentStyles/HomePage.css';
import LoadingPage from './LoadingPage';

export default class HomePage extends Component {
  render() {
    return (
      <div className="mainBody">
        <h1 className="pageHeader">Home Page</h1>
      </div>
    );
  }
}
