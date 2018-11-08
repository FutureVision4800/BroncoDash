import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProfileMain from './components/ProfileMain';
import ProfileCalendar from './components/ProfileCalendar';
import ProfileTabs from './components/ProfileTabs';




class Calendar extends React.Component{


  constructor(){
    super();
    this.state = {
      userInfo: {},//this.getInfo(),
      //email: this.userInfo.email
    }
    //console.log(this.state.userInfo);
    //console.log(this.state.userInfo.email);
    // console.log(this.state.email);
  }

  componentDidMount(){
    fetch('/users/getInfo')
    .then(res => res.json())
    .then(data => this.setState({ userInfo: data }))
    .catch(err => console.log(err));

    console.log(this.state.userInfo);
  }
  

  async getInfo(){
    try {
      const res = await fetch('/users/getInfo');
      const userInfo = res.json();
     
      return userInfo.data;
    }
    catch (err) {
      return console.log(err);
    }

    
  }

  render(){
    return(
      <div>
        <Container>
          <div className="profile">
            <Row>
              <Col md={12} lg={12} xl={4}>
                <Row>
                  <ProfileMain 
                  username={ this.state.username } 
                  firstName={ this.state.firstName } 
                  lastName={this.state.lastName} 
                  email={this.state.email}/>
                  <ProfileCalendar />
                </Row>
              </Col>
              <ProfileTabs />
            </Row>
          </div>
        </Container>
      </div>
    );
    }
}    
export default Calendar;
