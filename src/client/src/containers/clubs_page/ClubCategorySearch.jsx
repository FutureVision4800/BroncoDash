import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Card, Collapse, Button } from 'reactstrap';
//import TopbarMenuLink from '../_layout/topbar/TopbarMenuLink';

//const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const buttonStyle = { 
    backgroundColor: "white", 
    textAlign: "center",
    border: "white" };

export default class ClubCategorySearch extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
      loggedIn: false,
      username: null,
      userFullName: null,
      searchQwery: ""
    };

    this.getUserInfo = this.getUserInfo.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  componentDidMount(){
    //this.getUserInfo();
  }

  changeSearchQwery(query, e){
    e.preventDefault();

      if(query === 0)
        this.setState({ searchQwery: "" });
      else if(query === 1)
        this.setState({ searchQwery: "Agricultural Council (AGC)" });
      else if(query === 2)
        this.setState({ searchQwery: "Asian and Pacific Islander" });
      else if(query === 3)
        this.setState({ searchQwery: "Christian" });
      else if(query === 4)
        this.setState({ searchQwery: "College of Education of Integrative Studies (CEIS)" });
      else if(query === 5)
        this.setState({ searchQwery: "College of Enviormental Design Council (EDC)" });
      else if(query === 6)
        this.setState({ searchQwery: "College of Letters, Arts, & Social Sciences Council" });
      else if(query === 7)
        this.setState({ searchQwery: "Collins College of Hospitality Managment" });
      else if(query === 8)
        this.setState({ searchQwery: "Dance" });
      else if(query === 9)
        this.setState({ searchQwery: "Engineering Council (EC)" });
      else if(query === 10)
        this.setState({ searchQwery: "Greek Council (GC)" });
      else if(query === 11)
        this.setState({ searchQwery: "Inter Hall Council (IHC)" });
      else if(query === 12)
        this.setState({ searchQwery: "Internfraternity Council (IFC)" });
      else if(query === 13)
        this.setState({ searchQwery: "Multicultural Council (MCC)" });
      else if(query === 14)
        this.setState({ searchQwery: "Multicultural Greek Council (MGC)" });
      else if(query === 15)
        this.setState({ searchQwery: "National Pan-Hellenic Council" });
      else if(query === 16)
        this.setState({ searchQwery: "Native American" });
      else if(query === 17)
        this.setState({ searchQwery: "Pan African" });
      else if(query === 18)
        this.setState({ searchQwery: "Panhellenic Council (NPC)" });
      else if(query === 19)
        this.setState({ searchQwery: "Religious" });
      else if(query === 20)
         this.setState({ searchQwery: "Science Council (SC)" });
      else if(query === 21)
         this.setState({ searchQwery: "Student Interest Council (SIC)" });
      else if(query === 22)
        this.setState({ searchQwery: "United Business Student</p><p> Senate (UBSSC)" });

    this.props.callbackFromClubPage(this.state.searchQwery);
      

  }

  getUserInfo(){

    fetch('/api/user/getCurrentUser')
    .then(res => res)
    .then(res => res.json()
    .then(data => {
      if(data.user){
        console.log("Get User: There is a user saved in the server session: ", data.user);

        this.setState({
          loggedIn: true,
          username: data.user.username
        });

        fetch('/users/getInfo',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: this.state.username
          })
        })
        .then(res => res.json()
        .then(data => {
          console.log(data);
          this.setState({ userFullName: data[0].name })
        }))
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

  


  render() {
    return (
        <Card>
            <div className="topbar__profile">
                <button className="topbar__avatar" onClick={this.toggle}>
                {/*<img className="topbar__avatar-img" src={Ava} alt="avatar" />*/}
                <p className="topbar__avatar-name">Search by Category</p>
                <DownIcon className="topbar__icon" />
                </button>
                {this.state.collapse && <button className="topbar__back" onClick={this.toggle} />}
                <Collapse isOpen={this.state.collapse} 
                    className="topbar__menu-wrap" 
                    style={{ textAlign: "center"}}>
                <div className="topbar__menu">
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(0,e)}>
                        <p>All</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(1,e)}>
                        <p>Agricultural Council (AGC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(2,e)}>
                        <p>Asian and Pacific Islander</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(3,e)}>
                        <p>Christian</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(4,e)}>
                        <p>College of Education of</p>
                        <p>Integrative Studies (CEIS)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(5,e)}>
                        <p>College of Enviormental Design</p>
                        <p>Council (EDC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    {/*<Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(6,e)}>
                        <p>College of Letters, Arts, {"&"}</p>
                        <p>Social Sciences Council</p>
                    </Button>
                    <div className="topbar__menu-divider" />*/}
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(7,e)}>
                        <p>Collins College of Hospitality</p>
                        <p>Managment</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(8,e)}>
                        <p>Dance</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(9,e)}>
                        <p>Engineering Council (EC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(10,e)}>
                        <p>Greek Council (GC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    {/*<Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(11,e)}>
                        <p>Inter Hall Council (IHC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(12,e)}>
                        <p>Internfraternity Council (IFC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(13,e)}>
                        <p>Multicultural Council (MCC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(14,e)}>
                        <p>Multicultural Greek</p><p>Council (MGC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(15,e)}>
                        <p>National Pan-Hellenic Council</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(16,e)}>
                        <p>Native American</p>
                    </Button>
                    <div className="topbar__menu-divider" />*/}
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(17,e)}>
                        <p>Pan African</p>
                    </Button>
                    {/*<div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(18,e)}>
                        <p>Panhellenic Council (NPC)</p>
                    </Button>*/}
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(19,e)}>
                        <p>Religious</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(20,e)}>
                        <p>Science Council (SC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(21,e)}>
                        <p>Student Interest Council (SIC)</p>
                    </Button>
                    <div className="topbar__menu-divider" />
                    <Button style={buttonStyle} 
                      onClick={(e) => this.changeSearchQwery(22,e)}>
                        <p>United Business Student</p>
                        <p> Senate (UBSSC)</p>
                    </Button>

                
                    {/*<TopbarMenuLink title="My Profile" icon="user" path="/account/profile" />
                    <div className="topbar__menu-divider" />
                    <TopbarMenuLink title="Account Settings" icon="cog" path="/account/profile" />
                    <TopbarMenuLink title="Log Out" icon="exit" path="/log_in" />*/}
                </div>
                </Collapse>
            </div>
        </Card>
    );
  }
}
