import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../_layout/index';

import Alerts from '../ui/alerts/index';
import Buttons from '../ui/buttons/index';
import Carousel from '../ui/carousel/index';
import Collapse from '../ui/collapse/index';
import Grids from '../ui/Grids';
import Modals from '../ui/modals/index';
import Notifications from '../ui/notification/index';
import Panels from '../ui/panels/index';
import ProgressBars from '../ui/progress_bars/index';
import RangeSliders from '../ui/range_sliders/index';
import Tabs from '../ui/tabs/index';
import Timeline from '../ui/timeline/index';
import Tooltips from '../ui/tooltips/index';
import Typography from '../ui/typography/index';

import BasicTables from '../tables/basic_tables/index';
import DataTable from '../tables/data_table/index';
import EditableTable from '../tables/editable_table/index';
import MaterialTable from '../tables/material_table/index';

import GoogleMap from '../maps/google_map/index';
import VectorMap from '../maps/vector_map/index';

import NotFound404 from '../default_page/404/index';
import Calendar from '../default_page/calendar/index';
import FAQ from '../default_page/faq/index';
import Gallery from '../default_page/gallery/index';
import Chat from '../chat/index';
import PricingCards from '../default_page/pricing_cards/index';
import TextEditor from '../default_page/text_editor/index';
import InvoiceTemplate from '../default_page/invoice_template/index';
import SearchResults from '../default_page/search_results/index';
import ProjectSummary from '../default_page/project-summary/index';

import Catalog from '../e-commerce/catalog/index';
import ProductPage from '../e-commerce/product_page/index';

import Profile from '../account/profile/index';
import EmailConfirmation from '../account/email_confimation/index';
import LockScreen from '../account/lock_screen/index';
import LogIn from '../account/log_in/index';
import LogInPhoto from '../account/log_in_photo/index';
import Register from '../account/register/index';
import RegisterPhoto from '../account/register_photo/index';

import BasicForm from '../form/basic_form/index';
import FormDropzone from '../form/form_dropzone/index';
import FileUpload from '../form/file_upload/index';
import FormLayouts from '../form/form_layouts/index';
import CheckFormControls from '../form/check_form_controls/index';
import FormValidation from '../form/form_validation/index';
import MaskForm from '../form/mask_form/index';
import WizardForm from '../form/wizard_form/index';
import MaterialForm from '../form/material_form/index';
import FloatingLabelsForm from '../form/floating_labels_form/index';
import FormPicker from '../form/form_picker/index';

import Cart from '../e-commerce/cart/index';
import OrdersList from '../e-commerce/orders_list/index';
import Payment from '../e-commerce/payment/index';
import ProductEdit from '../e-commerce/product_edit/index';
import ProductsList from '../e-commerce/products_list/index';

import ChartsJS from '../charts/chart_js/index';
import ReactVis from '../charts/react-vis/index';
import Recharts from '../charts/recharts/index';

import FitnessDashboard from '../dashboards/fitness/index';
import DefaultDashboard from '../dashboards/default/index';
import ECommerceDashboard from '../dashboards/e-commerce/index';
import CryptoDashboard from '../dashboards/crypto/index';

import Mail from '../mail/index';

import CryptoDashboardEdit from '../dashboards/crypto_table_edit/index';
import ECommerceDashboardEdit from '../dashboards/e-commerce_table_edit/index';

import Landing from '../landing/index';

import ClubsPage from '../clubs_page/index';

const UI = () => (
  <Switch>
    <Route path="/ui/alerts" component={Alerts} />
    <Route path="/ui/buttons" component={Buttons} />
    <Route path="/ui/carousel" component={Carousel} />
    <Route path="/ui/collapse" component={Collapse} />
    <Route path="/ui/grids" component={Grids} />
    <Route path="/ui/modals" component={Modals} />
    <Route path="/ui/notifications" component={Notifications} />
    <Route path="/ui/panels" component={Panels} />
    <Route path="/ui/progress_bars" component={ProgressBars} />
    <Route path="/ui/range_sliders" component={RangeSliders} />
    <Route path="/ui/tabs" component={Tabs} />
    <Route path="/ui/timeline" component={Timeline} />
    <Route path="/ui/tooltips" component={Tooltips} />
    <Route path="/ui/typography" component={Typography} />
  </Switch>
);

const Forms = () => (
  <Switch>
    <Route path="/forms/basic_form" component={BasicForm} />
    <Route path="/forms/check_form_controls" component={CheckFormControls} />
    <Route path="/forms/file_upload" component={FileUpload} />
    <Route path="/forms/floating_labels_form" component={FloatingLabelsForm} />
    <Route path="/forms/form_dropzone" component={FormDropzone} />
    <Route path="/forms/form_layouts" component={FormLayouts} />
    <Route path="/forms/form_picker" component={FormPicker} />
    <Route path="/forms/form_validation" component={FormValidation} />
    <Route path="/forms/mask_form" component={MaskForm} />
    <Route path="/forms/material_form" component={MaterialForm} />
    <Route path="/forms/wizard_form" component={WizardForm} />
  </Switch>
);

const Tables = () => (
  <Switch>
    <Route path="/tables/basic_tables" component={BasicTables} />
    <Route path="/tables/data_table" component={DataTable} />
    <Route path="/tables/editable_table" component={EditableTable} />
    <Route path="/tables/material_table" component={MaterialTable} />
  </Switch>
);

const Charts = () => (
  <Switch>
    <Route path="/charts/charts_js" component={ChartsJS} />
    <Route path="/charts/react_vis" component={ReactVis} />
    <Route path="/charts/recharts" component={Recharts} />
  </Switch>
);

const Maps = () => (
  <Switch>
    <Route path="/maps/google_map" component={GoogleMap} />
    <Route path="/maps/vector_map" component={VectorMap} />
  </Switch>
);

const Account = () => (
  <Switch>
    <Route path="/account/profile" component={Profile} />
    <Route path="/account/email_confirmation" component={EmailConfirmation} />
  </Switch>
);

const ECommerce = () => (
  <Switch>
    <Route path="/e-commerce/cart" component={Cart} />
    <Route path="/e-commerce/catalog" component={Catalog} />
    <Route path="/e-commerce/orders_list" component={OrdersList} />
    <Route path="/e-commerce/payment" component={Payment} />
    <Route path="/e-commerce/product_edit" component={ProductEdit} />
    <Route path="/e-commerce/product_page" component={ProductPage} />
    <Route path="/e-commerce/products_list" component={ProductsList} />
  </Switch>
);

const DefaultPages = () => (
  <Switch>
    <Route path="/default_pages/calendar" component={Calendar} />
    <Route path="/default_pages/faq" component={FAQ} />
    <Route path="/default_pages/gallery" component={Gallery} />
    <Route path="/default_pages/invoice_template" component={InvoiceTemplate} />
    <Route path="/default_pages/pricing_cards" component={PricingCards} />
    <Route path="/default_pages/project_summary" component={ProjectSummary} />
    <Route path="/default_pages/search_results" component={SearchResults} />
    <Route path="/default_pages/text_editor" component={TextEditor} />
  </Switch>
);

const Crypto = () => (
  <Switch>
    <Route exact path="/dashboard_crypto" component={CryptoDashboard} />
    <Route path="/dashboard_crypto/edit/:index" component={CryptoDashboardEdit} />
  </Switch>
);

const Commerce = () => (
  <Switch>
    <Route exact path="/dashboard_e_commerce" component={ECommerceDashboard} />
    <Route path="/dashboard_e_commerce/edit/:index" component={ECommerceDashboardEdit} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/home" component={DefaultDashboard} />
      <Route path="/dashboard_default" component={DefaultDashboard} />
      <Route path="/dashboard_e_commerce" component={Commerce} />
      <Route path="/dashboard_fitness" component={FitnessDashboard} />
      <Route path="/dashboard_crypto" component={Crypto} />
      <Route path="/ui" component={UI} />
      <Route path="/mail" component={Mail} />
      <Route path="/chat" component={Chat} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/charts" component={Charts} />
      <Route path="/maps" component={Maps} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
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
