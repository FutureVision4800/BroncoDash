import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import ActivityTimeline from '../../../shared/components/activity-timeline/ActivityTimeline';
import Club from '../../../shared/components/Club';

const DefaultDashboard = ({ t }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h1 className="page-title">{t('Home Page')}</h1>
      </Col>
    </Row>
      <Row>
          <Col md={12}>
              <h4 className="page-title">Your Clubs</h4>
          </Col>
      </Row>
    <Row>
        <Club clubName="CSS" clubDescrip="Computer Science Society"/>
        <Club clubName="M.A.S.A" clubDescrip="Mexican American Student Association"/>
        <Club clubName="FSS" clubDescrip="Food Science Society"/>
        <Club clubName="Swift" clubDescrip="Software Club"/>
    </Row>
    <Row>
      <ActivityTimeline/>
    </Row>
  </Container>
);

DefaultDashboard.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(DefaultDashboard);

