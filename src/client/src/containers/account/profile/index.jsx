import React from 'react';
import { Container, Row } from 'reactstrap';
import ProfileTabs from './components/ProfileTabs';






class Calendar extends React.Component{

  render(){
    return(
      <div>
        <Container>
          <div className="profile">
            <Row>
              <ProfileTabs />
            </Row>
          </div>
        </Container>
      </div>
    );
    }
}    
export default Calendar;
