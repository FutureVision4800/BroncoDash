import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
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
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    
    fetch('http://localhost:8080/api/user/login', {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({
          username: this.state.username, 
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
      
    

    /*
    axios.post('/api/user/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      console.log('login response: ');
      console.log(res);

      if(res.status === 200){
        // update user state
        this.props.updateUser({
          loggedIn: true,
          username: res.data.username
        });
        // update the state to redirect to home
        this.setState({
          redirectTo: '/home'
        });
      }
    }).catch(error => {
        console.log('login error: ');
        console.log(error);
    })
    */
  }

  showPassword(event) {
    event.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  render() {
    const { handleSubmit } = this.props;

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
          <Link className="btn btn-outline-primary account__btn" to="/register">Create
            Account
          </Link>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'log_in_form', // a unique identifier for this form
})(LogInForm);
