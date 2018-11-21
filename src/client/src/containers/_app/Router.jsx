import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../_layout/index';

import NotFound404 from '../default_page/404/index';
import Chat from '../chat/index';

import Profile from '../account/profile/index';
import EmailConfirmation from '../account/email_confimation/index';
import LockScreen from '../account/lock_screen/index';
import LogIn from '../account/log_in/index';
import LogInPhoto from '../account/log_in_photo/index';
import Register from '../account/register/index';
import RegisterPhoto from '../account/register_photo/index';

import DefaultDashboard from '../dashboards/default/index';

import Mail from '../mail/index';

import Landing from '../landing/index';

import ClubsPage from '../clubs_page/index';

const Account = () => (
  <Switch>
    <Route path="/account/profile" component={Profile} />
    <Route path="/account/email_confirmation" component={EmailConfirmation} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/home" component={DefaultDashboard} />
      <Route path="/dashboard_default" component={DefaultDashboard} />
      <Route path="/mail" component={Mail} />
      <Route path="/chat" component={Chat} />
      <Route path="/account" component={Account} />
      <Route path="/organizations" component={ClubsPage} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/404" component={NotFound404} />
        <Route path="/lock_screen" component={LockScreen} />
        <Route path="/log_in" component={LogIn} />
        <Route path="/log_in_photo" component={LogInPhoto} />
        <Route path="/register" component={Register} />
        <Route path="/register_photo" component={RegisterPhoto} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
