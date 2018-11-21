import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

//const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

export default class ProfileMain extends React.Component{

  
  constructor(){
    super();
    this.state = {
      userInfo: [],
      profile_username: "",
      profile_name: "",
      profile_email: "",
      profile_clubs: 0,
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
              profile_email: data[0].email,
              profile_clubs: data[0].clubs.length
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
      
        <Card>
          <CardBody className="profile__card">
            <div className="profile__information">
              {/*
              <div className="profile__avatar">
                <img src={Ava} alt="avatar" />
              </div>
              */}  
              <div className="profile__data">
                <h1 className="profile__name" style={{ padding: "50px", "padding-bottom": "50px" }}>{ this.state.profile_name }</h1>
                <h4 className="profile__work" >CPP Student</h4>
                <h4 className="profile__contact">{ this.state.profile_email }</h4>
                <h5 className="profile__contact">{`Currently part of ${this.state.profile_clubs} clubs`}</h5>
                {/*<p className="profile__contact">(123)-456-7890</p>*/}
                {/*<Button color="primary" className="icon profile__btn">
                  <p><MessageTextOutlineIcon />
                    <a style={{color:'#FFF'}} href={"mailto:" + this.state.profile_email}>Message</a>
                  </p>
                </Button>*/}
              </div>
            </div>
          </CardBody>
        </Card>

    );
  }
}



