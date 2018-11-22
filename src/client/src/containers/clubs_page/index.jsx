import React from 'react';

import ClubsList from './ClubsList';
import ClubSearch from './ClubSearch';


export default class ClubsPage extends React.Component{

    constructor(){
        super();
        this.state = {
            qwery: null,
            clubs:[]
        }
    }
    
    componentDidMount(){
       this.getAllClubs();
    }

    getAllClubs(){
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
    }

    searchQwery(searchQwery){
        this.setState({ qwery: searchQwery });
    }


    render(){
        return(
        <div>
            <div className="topbar__right">
                <ClubSearch callbackFromClubPage={this.searchQwery}/>
            </div>
            <div>
                <h1 className="bold-text" style={{ paddingBottom: "30px", padding: "15px" }}>Cal Poly Pomona Clubs and Oranizations</h1>
                <ClubsList clubs={this.state.clubs} />  
            </div>
        </div>
        );
    }

}