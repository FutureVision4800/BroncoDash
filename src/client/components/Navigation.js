import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Navigation = () => (
  <div>
    <NavLink to="/login">Log In</NavLink>
    <NavLink to="/signup">Sign Up</NavLink>
  </div>
);

export default Navigation;
