import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

class Club extends PureComponent {
    static proptypes = {
        clubName: PropTypes.string.isRequired,
        clubDescrip: PropTypes.string.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            clubName: props.clubName,
            clubDescrip: props.clubDescrip,
        };
    }

    render(){
        return (
            <Col md={12} xl={3} lg={6} xs={12} >
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h5 className="bold-text">{ this.props.clubName }</h5>
                        </div>
                        <div>
                            <h6>{ this.props.clubDescrip }</h6>
                        </div>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}

export default translate('common')(Club);