/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeThemeToDark, changeThemeToLight } from '../../redux/actions/themeActions';
import { ThemeProps } from '../../shared/prop-types/ReducerProps';
import {Link} from "react-router-dom";

//const logo = `${process.env.PUBLIC_URL}/img/landing/logo_svg.svg`;

class Landing extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    theme: ThemeProps.isRequired,
  };

  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
  };

  render() {


    return (
      <div className="landing">
        <ul>
          <li>
            <Link className="landing__btn landing__btn--header " to="/log_in">
                Go to BroncoDash
            </Link>
          </li>
          <li>
            <div style={{ textAlign: "center" }}>
            <a className="landing__btn landing__btn--header " 
               href="https://cs480-projects.github.io/teams-fall2018/FutureVision/index.html"
               target="__blank">
              More Info
            </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ theme: state.theme }))(Landing);
