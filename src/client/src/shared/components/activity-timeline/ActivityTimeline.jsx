import React, { Component } from 'react';
import Activity from './Activity';
import { Card, CardBody, Col } from 'reactstrap';


const Ava1 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/15.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava4 = `${process.env.PUBLIC_URL}/img/photo_notification.png`;
const Img1 = `${process.env.PUBLIC_URL}/img/9.png`;
const Img2 = `${process.env.PUBLIC_URL}/img/13.png`;


class ActivityTimeline extends Component {ActivityTimeline

    render() {
        return (
            <Col md={12} lg={12} xl={12} xs={12}>
                <Card>
                <CardBody className="dashboard__card-widget">
                <div className="card__title">
                    <h3 className="bold-text">Club Activity</h3>
                </div>
                <div>
                <Activity img={Ava1} date="1 min ago" name="CSS">
                    <p>
                        Speaker from Google is coming to speak tomorrow.
                    </p>
                </Activity>
                <Activity img={Ava1} date="3 hours ago" name="M.A.S.A">
                    <p>
                        Second general body meeting next Thursday.
                    </p>
                </Activity>
                <Activity img={Ava2} date="3 hours ago" name="Swift">
                    <p>Click <a href="/">here</a> for our club sign up sheet!.</p>
                    <img src={Img1} alt=""/>
                    <img src={Img2} alt=""/>
                </Activity>
                <Activity img={Ava3} date="5 hours ago" name="Antony Jackson ">
                    <p>
                        is the meeting still happening?
                    </p>
                </Activity>
                <Activity img={Ava4} date="20.05.2017" name="FSS">
                    <p>
                        Selling food at the quad during U-Hour.
                    </p>
                </Activity>
                <Activity img={Ava1} date="20.05.2017" name="Chris Jones">
                    <p>
                        Is the club still accepting members???
                    </p>
                </Activity>
            </div>
                </CardBody>
            </Card>
            </Col>
        );
    }
}
export default ActivityTimeline;
