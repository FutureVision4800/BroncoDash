import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CloseIcon from 'mdi-react/CloseIcon';
import PropTypes from 'prop-types';
import { CustomizerProps, SidebarProps, ThemeProps } from '../../../shared/prop-types/ReducerProps';
import ToggleTheme from './ToggleTheme';

const settings = `${process.env.PUBLIC_URL}/img/settings.svg`;


export default class Customizer extends PureComponent {
  static propTypes = {
    sidebar: SidebarProps,
    customizer: CustomizerProps,
    theme: ThemeProps.isRequired,
    changeSidebarVisibility: PropTypes.func,
    toggleTopNavigation: PropTypes.func,
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    changeBorderRadius: PropTypes.func,
    toggleBoxShadow: PropTypes.func
  };

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const customizerClass = classNames({
      customizer__wrap: true,
      'customizer__wrap--open': this.state.open,
    });

    const {
      theme,
      changeToDark,
      changeToLight,
    } = this.props;

    return (
      <div className="customizer">
        <button className="customizer__btn" onClick={this.handleOpen}>
          <img className="customizer__btn-icon" src={settings} alt="icon" />
        </button>
        <div className={customizerClass}>
          <div className="customizer__title-wrap">
            <h5>Theme Mode</h5>
            <button className="customizer__close-btn" onClick={this.handleOpen}>
              <CloseIcon />
            </button>
          </div>
          <p className="customizer__caption">Switch between light and dark mode.</p>
          <ToggleTheme changeToDark={changeToDark} changeToLight={changeToLight} theme={theme} />
        </div>
      </div>
    );
  }
}
