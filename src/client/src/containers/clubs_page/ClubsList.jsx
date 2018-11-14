import React from 'react';
import ClubTile from './ClubTile';



const ClubsList = props => (

    
    <div>
        {props.clubs.map(currentClub => 
                            <ClubTile key={currentClub.id} 
                            clubName={currentClub.clubName} 
                            clubCategory={currentClub.category} 
                            clubEmail={currentClub.email} 
                            clubDescription={currentClub.description}/>)}
    </div>
    
);

export default ClubsList;