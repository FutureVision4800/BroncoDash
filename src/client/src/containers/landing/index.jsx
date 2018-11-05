/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeThemeToDark, changeThemeToLight } from '../../redux/actions/themeActions';
import { ThemeProps } from '../../shared/prop-types/ReducerProps';
import {Link} from "react-router-dom";

const logo = `${process.env.PUBLIC_URL}/img/landing/logo_svg.svg`;

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
          <Link className="landing__btn landing__btn--header " to="/log_in">
              Go to BroncoRush
          </Link>
      </div>
    );
  }
}

export default connect(state => ({ theme: state.theme }))(Landing);
