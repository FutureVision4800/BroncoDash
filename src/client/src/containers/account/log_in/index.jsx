import React from 'react';
import LogInForm from './components/LogInForm';

const LogIn = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo"> Bronco
              <span className="account__logo-accent">Dash</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Find your next organization</h4>
        </div>
        <LogInForm onSubmit />
      </div>
    </div>
  </div>
);

export default LogIn;
