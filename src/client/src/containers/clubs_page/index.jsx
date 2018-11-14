import React from 'react';

import ClubsList from './ClubsList';


export default class ClubsPage extends React.Component{

    state = {
        clubs: []
    }

    componentDidMount(){
        fetch('/database/getClubs')
        .then(res => res)
        .then(res => res.json())
        .then(data => {

            const allClubs = data.map(c => {
                return {
                    id: c._id,
                    clubName: c.clubName,
                    description: c.description,
                    email: c.email,
                    category: c.category
                };
            });

            const newState = Object.assign({}, this.state, {
                clubs: allClubs
            });

            this.setState(newState);
        })
        .catch(err => console.log(err));
    }



    render(){
        return(
        <div>
            <h1>Cal Poly Pomona Clubs and Oranizations</h1>
            <ClubsList clubs={this.state.clubs} />  
        </div>)
        ;
    }

}