import React from 'react';

import ClubsList from './ClubsList';


export default class ClubsPage extends React.Component{


    constructor(){
        super();
        this.state = {
            username:"",
            clubs: []
        }
    }

    componentDidMount(){
        this.getUserInfo();
        /*
        fetch('/database/getClubs')
        .then(res => res.json()
        .then(data => {

            const allClubs = data.map(c => {
                return {
                    id: c._id,
                    clubName: c.clubName,
                    description: c.description,
                    email: c.email,
                    category: c.category,
                    myBAR: c.myBAR
                };
            });

            const newState = Object.assign({}, this.state, {
                clubs: allClubs
            });

            this.setState(newState);
        }))
        .catch(err => console.log(err));
        */
    }


    mapClubsList(data){
        const allClubs = data.map(c => {
            return {
                id: c._id,
                clubName: c.clubName,
                description: c.description,
                email: c.email,
                category: c.category,
                myBAR: c.myBAR
            };
        });

        const newState = Object.assign({}, this.state, {
            clubs: allClubs
        });

        this.setState(newState);
    }

    getUserInfo(){

        fetch('/api/user/getCurrentUser')
          .then(res => res)
          .then(res => res.json()
          .then(data => {
            if(data.user){
              console.log("Get User: There is a user saved in the server session: ");
      
              this.setState({
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
                //this.setState({clubs: data[0].clubs});
                this.mapClubsList(data[0].clubs);
                }))
              .catch(err => console.log(err));
      
          } 
          else{
            console.log("Get user: no user");
            this.setState({
              username: null,
            });
          }
        }))
          .catch(err => console.log(err));
      
        
      }


    render(){
        return(
        <div>
            <h1 className="bold-text">Your Clubs</h1>
            <ClubsList clubs={this.state.clubs} />  
        </div>)
        ;
    }

}