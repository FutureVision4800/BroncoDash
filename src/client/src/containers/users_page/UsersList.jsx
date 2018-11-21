import React from 'react';
import UserTile from './UserTile';




const UsersList = props => (

    
    <div>
        {props.users.map(currentUser => 
                            <UserTile key={currentUser.id} 
                            name={currentUser.name} 
                            email={currentUser.email} 
                            clubs={currentUser.clubs}/>)}
    </div>
    
);


export default UsersList;