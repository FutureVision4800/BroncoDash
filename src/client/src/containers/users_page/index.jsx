import React from 'react';

import UsersList from './UsersList';


export default class UsersPage extends React.Component{

    state = {
        users: []
    }

    componentDidMount(){
        fetch('/users/getAllUsers')
        .then(res => res)
        .then(res => res.json()
        .then(data => {

            const allUsers = data.map(u => {
                return {
                    id: u._id,
                    name: u.name,
                    email: u.email,
                    clubs: u.clubs
                };
            });

            const newState = Object.assign({}, this.state, {
                users: allUsers
            });

            this.setState(newState);
        }))
        .catch(err => console.log(err));
    }



    render(){
        return(
        <div>
            <h1 className="bold-text" style={{ "paddingBottom": "30px","padding": "15px" }}>Bronco Dash Users</h1>
            <UsersList users={this.state.users} />  
        </div>)
        ;
    }

}