import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Home" icon="home" route="/dashboard_default" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Clubs and Organizations"  route="/organizations" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Mail" icon="envelope" route="/mail" onClick={this.hideSidebar} />
          <SidebarLink title="Chat" icon="bubble" route="/chat" onClick={this.hideSidebar} />
          <SidebarLink title="Google map" icon="map" route="/maps/google_map" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/log_in" />
        </ul>
        <ul className="sidebar__block">
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
