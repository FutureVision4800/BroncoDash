import React from 'react';

import ClubsList from './ClubsList';


const clubs = [
    {id: 1, clubName: "MASA", description: "Mexican American Student Association", email: "masa@gmail.com", category:"Science"},
    {id: 2, clubName: "CSS", description: "Computer Science Society", email: "cssgmail.com", category:"Science"},
    {id: 3, clubName: "FSS", description: "Food Science Society", email: "FSS@gmail.com", category:"Agricultural"}
];


//const clubs = fetch('/database/getClubs').then(res => res.json()).catch(err => console.log(err));


export default class ClubsPage extends React.Component{


    render(){
        return(
        <div>
            <h1>Cal Poly Pomona Clubs and Oranizations</h1>
            <ClubsList clubs={clubs} />  
        </div>)
        ;
    }

}