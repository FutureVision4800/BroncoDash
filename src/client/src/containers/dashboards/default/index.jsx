import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
//import ActivityTimeline from '../../../shared/components/activity-timeline/ActivityTimeline';
import RecommendClubsPage from './components/recommend_clubs_page';
//import Club from '../../../shared/components/Club';

const DefaultDashboard = ({ t }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h1 className="bold-text" 
          style={{ margin: "30px 0px 30px"}}>
            Club Recommendations
        </h1>
      </Col>
    </Row>
    <Row>
      {/*<ActivityTimeline/>*/}
      <RecommendClubsPage />
    </Row>
  </Container>
);

DefaultDashboard.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(DefaultDashboard);

