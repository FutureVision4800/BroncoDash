import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Navigation = () => (
  <div>
    <Button color="primary" variant="contained"><NavLink to="/login" className="pageLinks">Log In</NavLink></Button>
    <Button color="primary" variant="contained"><NavLink to="/signup" className="pageLinks">Sign Up</NavLink></Button>
  </div>
);

export default Navigation;
