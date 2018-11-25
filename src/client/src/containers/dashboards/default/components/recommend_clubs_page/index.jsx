import React from 'react';

import RecommendClubsList from './RecommendClubsList';
//import ClubSearch from './ClubSearch';
//import ClubCategorySearch from './ClubCategorySearch';
//import { ThoughtBubbleIcon } from 'mdi-react';


export default class RecommendClubsPage extends React.Component{


    constructor(){
        super();
        this.state = {
            username:"",
            clubs: []
        }
    }

    componentDidMount(){
        this.getUserInfo();
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
                this.getUserClubCategories(data[0].clubs);
                //this.mapClubsList(data[0].clubs);

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

    getUserClubCategories(data){

        fetch('/api/recommend/clubRecommendations', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              userClubs: data
            })
          })
          .then(res => res.json()
          .then(data => {
            this.mapClubsList(data);
          }))
          .catch(err => console.log(err));

    }


    render(){
        return(
        <div>
            <RecommendClubsList clubs={this.state.clubs} />  
        </div>)
        ;
    }

}
