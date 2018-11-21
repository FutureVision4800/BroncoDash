import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';



const UserTile = props => (
        <div>
            <Card>
                <CardBody className="profile__card">
                    <div className="profile__information">
                    {/*
                    <div className="profile__avatar">
                        <img src={Ava} alt="avatar" />
                    </div>
                    */}  
                    <div className="profile__data">
                        <h2 className="profile__name" style={{ padding: "50px", "paddingBottom": "50px" }}>{ props.name }</h2>
                        <h4 className="profile__work" >CPP Student</h4>
                        <h4 className="profile__contact">{ props.email }</h4>
                        <h5 className="profile__contact">{`Currently part of ${props.clubs.length} clubs`}</h5>
                        {/*<p className="profile__contact">(123)-456-7890</p>*/}
                        <Button color="primary" className="icon profile__btn">
                        <p><MessageTextOutlineIcon />
                            <a style={{color:'#FFF'}} href={"mailto:" + props.email}>Message</a>
                        </p>
                        </Button>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </div>
            /*
            <div>
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h2 className="bold-text">{ props.clubName }</h2>
                        </div>
                        <div>
                            <h5>Category: { props.clubCategory }</h5>
                            <h5>Contact Info: <a href={"mailto:" + props.clubEmail}>{ props.clubEmail }</a></h5>
                            <h5>More Info: <a href={ props.myBAR }>{ props.myBAR }</a></h5>
                            <h6>{ props.clubDescription }</h6>
                        </div>
                    </CardBody>
                </Card>
            </div>
            */
);



UserTile.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string
};

export default translate('common')(UserTile);


/*
class ClubTile extends PureComponent {
    
    
    static proptypes = {
        clubName: PropTypes.string.isRequired,
        clubDescrip: PropTypes.string.isRequired,
    };
    

    constructor(props){
        super(props);
        this.state = {
            clubName: props.clubName,
            clubDescrip: props.clubDescrip,
            clubEmail: props.clubEmail,
            clubCategory: props.clubCategory
        };
    }

    render(){
        return (
            <Col md={12} xl={3} lg={6} xs={12} >
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h2 className="bold-text">{ this.props.clubName }</h2>
                        </div>
                        <div>
                            <h5>Category: { this.props.clubCategory }</h5>
                            <h5>Contact Info: { this.props.clubEmail }</h5>
                            <h6>{ this.props.clubDescrip }</h6>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default translate('common')(ClubTile);
*/
