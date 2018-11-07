import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProfileMain from './components/ProfileMain';
import ProfileCalendar from './components/ProfileCalendar';
import ProfileTabs from './components/ProfileTabs';




class Calendar extends React.Component{


  constructor(){
    super();
    this.state = {
      userInfo: this.getInfo(),
    }
    console.log("hello");
  }

  async getInfo(){
    try {
      const res = await fetch('/users/getInfo');
      return res.json();
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
