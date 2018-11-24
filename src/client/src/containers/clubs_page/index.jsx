import React from 'react';

import ClubsList from './ClubsList';
import ClubSearch from './ClubSearch';
import ClubCategorySearch from './ClubCategorySearch';
//import { ThoughtBubbleIcon } from 'mdi-react';


export default class ClubsPage extends React.Component{

    constructor(){
        super();
        this.state = {
            qwery: "",
            clubs:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getSearchedClubs = this.getSearchedClubs.bind(this);
        this.getAllClubs = this.getAllClubs.bind(this);
        this.getSearchedCategoryClubs = this.getSearchedCategoryClubs.bind(this);
        this.searchQwery = this.searchQwery.bind(this);
    }
    
    componentDidMount(){
        
        this.getAllClubs();

    }

    
    componentDidUpdate(){
   
       
    }
    
    getSearchedClubs(){
        fetch('/database/getQweryNameClubs',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            clubName: this.state.qwery
            })
          })
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

    getSearchedCategoryClubs(){
        fetch('/database/getQweryCategoryClubs',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            category: this.state.qwery
            })
          })
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
        console.log("search qweery: ", searchQwery);
        console.log("previous qwuery",this.state.qwery);
        this.setState({ qwery: searchQwery });
        console.log("new qwery", this.state.qwery);

        if(this.state.qwery === null || this.state.qwery === ""){
            console.log(this.state.qwery);
            this.getAllClubs();
        }
        else{
            console.log(this.state.qwery);
            this.getSearchedCategoryClubs();
        }
        this.forceUpdate();
    }


    render(){
        return(
        <div>
            <div className="topbar__right">
                <ClubCategorySearch callbackFromClubPage={this.searchQwery}/>
                {/*<ClubSearch callbackFromClubPage={this.searchQwery}/>*/}
            </div>
            <div>
                <h1 className="bold-text" style={{ paddingBottom: "30px", padding: "15px" }}>Cal Poly Pomona Clubs and Oranizations</h1>
                <ClubsList clubs={this.state.clubs} />  
            </div>
        </div>
        );
    }

}