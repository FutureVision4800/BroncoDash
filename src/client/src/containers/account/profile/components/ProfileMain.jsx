import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

export default class ProfileMain extends React.Component{

  
  constructor(props){
    super(props);
    this.state = {
      profile_username: props.username,
      profile_firstName: props.firstName,
      profile_lastName: props.lastName,
      profile_email: props.email
      
    };
  }

/*

  componentDidMount(){
    fetch('/users/getInfo')
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  getInfo(){
    return fetch('/users/getInfo')
    .then(res => res.json())
    .then(userInfo => this.setState({ userInfo }))
    .catch(err => console.log(err));
  }

*/

  render(){
    return(
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody className="profile__card">
            <div className="profile__information">
              <div className="profile__avatar">
                <img src={Ava} alt="avatar" />
              </div>
              <div className="profile__data">
                <p className="profile__name">{ this.state.profile_firstName }  { this.state.profile_lastName }</p>
                <p className="profile__work">CPP Student</p>
                <p className="profile__contact">{ this.state.profile_email }</p>
                <p className="profile__contact">(123)-456-7890</p>
                <Button color="primary" className="icon profile__btn"><p><MessageTextOutlineIcon /> Message</p></Button>
              </div>
            </div>
            <div className="profile__stats">
              <div className="profile__stat">
                <p className="profile__stat-number">05</p>
                <p className="profile__stat-title">Projects</p>
              </div>
              <div className="profile__stat">
                <p className="profile__stat-number">24</p>
                <p className="profile__stat-title">Tasks</p>
              </div>
              <div className="profile__stat">
                <p className="profile__stat-number">12</p>
                <p className="profile__stat-title">Reports</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}



