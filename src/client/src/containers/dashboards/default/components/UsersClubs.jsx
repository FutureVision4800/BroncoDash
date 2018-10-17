import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { translate } from 'react-i18next';
import Club from "./Club";


class UsersClubs extends PureComponent {


    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <Col md={12} xl={12} lg={12} xs={12} >
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h4 className="bold-text">Your Clubs</h4>
                        </div>
                        <div>
                            <Club clubName="CSS" clubDescrip="Computer Science Society"/>
                            <Club clubName="M.A.S.A" clubDescrip="Mexican American Student Association"/>
                            <Club clubName="FSS" clubDescrip="Food Science Society"/>
                            <Club clubName="Swift" clubDescrip="Software Club"/>
                        </div>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}

export default translate('common')(UsersClubs);