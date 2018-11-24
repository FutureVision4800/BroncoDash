import React from 'react';
import ClubTile from './ClubTile';




const ClubsList = props => (

    
    <div>
        {props.clubs.map(currentClub => 
                            <ClubTile key={currentClub.id} 
                                clubID={currentClub.id}
                                clubName={currentClub.clubName} 
                                clubCategory={currentClub.category} 
                                clubEmail={currentClub.email} 
                                clubDescription={currentClub.description}
                                myBAR={currentClub.myBAR}/>)}
    </div>
    
);


export default ClubsList;