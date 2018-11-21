import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';


class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
      redirectTo: null
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  componentDidMount(){
    this.logout();
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.login();
      
  }

  login(){

    fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
          username: this.state.username, 
          password: this.state.password
        }),
      headers: {'Content-Type': 'application/json'},
      })
      .then(res => res.json()
      .then(data => {
        console.log(data);
        if(res.status === 200){
          console.log("Succecssfull login");
          
          this.setState({
            redirectTo: '/home'
          });
        }
        else if(res.status === 401){
          console.log('Invalid Login');
          alert("Invalid Login");
        }
      }))
      .catch(err => console.log("Login Error: ",err));

  }

  logout(){
    //event.preventDefault();
    console.log('logging out');
    
    fetch('/api/user/logout', {
      method: 'POST',
      body: JSON.stringify({
          username: this.state.username, 
          password: this.state.password
        }),
      headers: {'Content-Type': 'application/json'},
      })
      .then(res => res.json()
      .then(data => {
        console.log(data);
        if(res.status === 200){
          this.setState({
            loggedIn: false,
            username: null
          });
        }
      }))
      .catch(err => console.log('Error: ', err));
    

  }

  showPassword(event) {
    event.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  createAccount(){
    return <Redirect to="/register" />
  }

  render() {
    const { handleSubmit } = this.props;

    if(this.state.redirectTo){
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    else{
      return (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <span className="form__form-group-label">Username</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <Field
                name="username"
                component="input"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Password</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <KeyVariantIcon />
              </div>
              <Field
                name="password"
                component="input"
                type={this.state.showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button
                className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                onClick={event => this.showPassword(event)}
              ><EyeIcon />
              </button>
            </div>
            <div className="account__forgot-password">
              <a href="/">Forgot a password?</a>
            </div>
          </div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
                name="remember_me"
                component={renderCheckBoxField}
                label="Remember me"
              />
            </div>
          </div>
          <div className="account__btns">
            <button className="btn btn-primary account__btn" onClick={this.handleSubmit} type="submit">Sign In</button>
            <Link className="btn btn-outline-primary account__btn" to='/register' >Create Account</Link>
          </div>
        </form>
      );
    }
  }
}

export default reduxForm({
  form: 'log_in_form', // a unique identifier for this form
})(LogInForm);
