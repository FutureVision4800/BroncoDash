import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CustomizerProps, SidebarProps, ThemeProps } from '../../shared/prop-types/ReducerProps';

class MainWrapper extends PureComponent {
  static propTypes = {
    sidebar: SidebarProps.isRequired,
    customizer: CustomizerProps.isRequired,
    theme: ThemeProps.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { sidebar, theme, customizer } = this.props;

    const wrapperClass = classNames({
      wrapper: true,
      'wrapper--full-width': sidebar.collapse,
      'squared-corner-theme': customizer.squaredCorners,
      'blocks-with-shadow-theme': customizer.withBoxShadow,
      'top-navigation': customizer.topNavigation,
    });

    return (
      <div className={theme.className}>
        <div className={wrapperClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  theme: state.theme,
  sidebar: state.sidebar,
  customizer: state.customizer,
}))(MainWrapper);
