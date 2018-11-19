import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
      loggedIn: false,
      username: null,
      userFullName: null
    };

    this.getUserInfo = this.getUserInfo.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

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
          username: data.user.username,  
          userFullName: data.user.name
        });
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

  logout(event){
    event.preventDefault();
    console.log('logging out');
    
    fetch('/api/user/logout', {
      method: 'POST',
      body: JSON.stringify({
          username: this.state.username, 
          password: this.state.password
        }),
      headers: {'Content-Type': 'application/json'},
      })
      .then(res => res.json()
      .then(data => {
        console.log(data);
        if(res.status === 200){
          this.setState({
            loggedIn: false,
            username: null
          });
        }
      }))
      .catch(err => console.log('Error: ', err));
    

  }



  render() {
    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
          <p className="topbar__avatar-name">{ this.state.username }</p>
          <DownIcon className="topbar__icon" />
        </button>
        {this.state.collapse && <button className="topbar__back" onClick={this.toggle} />}
        <Collapse isOpen={this.state.collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink title="My Profile" icon="user" path="/account/profile" />
            <TopbarMenuLink title="Calendar" icon="calendar-full" path="/default_pages/calendar" />
            <TopbarMenuLink title="Tasks" icon="list" path="/default_pages/calendar" />
            <TopbarMenuLink title="Inbox" icon="inbox" path="/mail" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink title="Account Settings" icon="cog" path="/account/profile" />
            <TopbarMenuLink title="Lock Screen" icon="lock" path="/lock_screen" />
            <button title="Log Out" icon="exit" onClick={this.logout} />
            <TopbarMenuLink title="Log Out" icon="exit" path="/log_in"><button title="Log Out" icon="exit" onClick={this.logout} /></TopbarMenuLink>
          </div>
        </Collapse>
      </div>
    );
  }
}
