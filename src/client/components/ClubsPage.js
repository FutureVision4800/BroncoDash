import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './componentStyles/ClubsPage.css';
import { Link } from 'react-router-dom';
import OrgPage from './OrgPage';

export default class ClubsPage extends React.Component {
  render() {
    return (
      <div className="orgsPage">
        <Grid>
          <Row>
            <Col>
              <h1 className="pageHeading">Clubs and Organizations</h1>
            </Col>
          </Row>
          <Row>
            <div>
              <Link to="/organizations/CSS">
                <div className="clubLeft">
                  <OrgPage clubName="CSS" clubDescription="Computer Science Society" />
                </div>
              </Link>
              <div className="clubRight">
                <OrgPage clubName="Swift" clubDescription="Software Club" />
              </div>
            </div>
          </Row>
          <Row>
            <div>
              <div className="clubLeft">
                <OrgPage clubName="FSS" clubDescription="Food Science Society" />
              </div>
              <div className="clubRight">
                <OrgPage clubName="M.A.S.A." clubDescription="Mexican American Student Association" />
              </div>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
