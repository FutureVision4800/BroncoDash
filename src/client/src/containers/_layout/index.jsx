/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationSystem from 'rc-notification';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './sidebar/Sidebar';
import SidebarMobile from './topbar_with_navigation/sidebar_mobile/SidebarMobile';
import Customizer from './customizer/Customizer';
import { BasicNotification } from '../../shared/components/Notification';
import { changeMobileSidebarVisibility, changeSidebarVisibility } from '../../redux/actions/sidebarActions';
import { changeThemeToDark, changeThemeToLight } from '../../redux/actions/themeActions';
import { changeBorderRadius, toggleBoxShadow, toggleTopNavigation } from '../../redux/actions/customizerActions';
import { CustomizerProps, SidebarProps, ThemeProps } from '../../shared/prop-types/ReducerProps';

let notification = null;

const showNotification = () => {
  notification.notice({
    content: <BasicNotification
      title="Welcome to the Bronco Rush!"
      message="Here you can find your home away from home. Enjoy!"
    />,
    duration: 5,
    closable: true,
    style: { top: 0, left: 'calc(100vw - 100%)' },
    className: 'right-up',
  });
};

class Layout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
    customizer: CustomizerProps.isRequired,
    theme: ThemeProps.isRequired,
  };
  changeSidebarVisibility = () => {
    this.props.dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
  };

  toggleTopNavigation = () => {
    this.props.dispatch(toggleTopNavigation());
  };

  changeBorderRadius = () => {
    this.props.dispatch(changeBorderRadius());
  };

  toggleBoxShadow = () => {
    this.props.dispatch(toggleBoxShadow());
  };

  render() {
    const { customizer, sidebar, theme } = this.props;

    return (
      <div>
        <Customizer
          customizer={customizer}
          sidebar={sidebar}
          theme={theme}
          changeSidebarVisibility={this.changeSidebarVisibility}
          toggleTopNavigation={this.toggleTopNavigation}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
          changeBorderRadius={this.changeBorderRadius}
          toggleBoxShadow={this.toggleBoxShadow}
        />
        {this.props.customizer.topNavigation ?
          <TopbarWithNavigation
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          /> :
          <Topbar
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
            changeSidebarVisibility={this.changeSidebarVisibility}
          />
        }
        {this.props.customizer.topNavigation ?
          <SidebarMobile
            sidebar={sidebar}
            changeToDark={this.changeToDark}
            changeToLight={this.changeToLight}
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          /> :
          <Sidebar
            sidebar={sidebar}
            changeToDark={this.changeToDark}
            changeToLight={this.changeToLight}
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          />
        }
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  customizer: state.customizer,
  sidebar: state.sidebar,
  theme: state.theme,
}))(Layout));
