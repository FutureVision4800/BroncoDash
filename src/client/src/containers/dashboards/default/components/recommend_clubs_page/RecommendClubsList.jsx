import React from 'react';
import RecommendClubTile from './RecommendClubTile';




const RecommendClubsList = props => (

    
    <div>
        {props.clubs.map(currentClub => 
                            <RecommendClubTile key={currentClub.id} 
                                clubID={currentClub.id}
                                clubName={currentClub.clubName} 
                                clubCategory={currentClub.category} 
                                clubEmail={currentClub.email} 
                                clubDescription={currentClub.description}
                                myBAR={currentClub.myBAR}/>)}
    </div>
    
);


export default RecommendClubsList;