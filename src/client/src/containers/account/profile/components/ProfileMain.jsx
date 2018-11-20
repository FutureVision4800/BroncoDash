import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

export default class ProfileMain extends React.Component{

  
  constructor(){
    super();
    this.state = {
      userInfo: [],
      profile_username: "",
      profile_name: "",
      profile_email: "",
      loggedIn: false
    };
  }

  componentDidMount(){
    this.getUserInfo();
  }

  getUserInfo(){

    fetch('/api/user/getCurrentUser')
      .then(res => res)
      .then(res => res.json()
      .then(data => {
        if(data.user){
          console.log("Get User: There is a user saved in the server session: ");
  
          this.setState({
            loggedIn: true,
            profile_username: data.user.username
          });
  
          fetch('/users/getInfo',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: this.state.profile_username
            })
          })
          .then(res => res.json()
          .then(data => 
            this.setState({ 
              profile_name: data[0].name,
              profile_email: data[0].email
             })))
          .catch(err => console.log(err));
  
      } 
      else{
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          userFullName: null
        });
      }
    }))
      .catch(err => console.log(err));
  
    
  }



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
                <p className="profile__name">{ this.state.profile_name }</p>
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



