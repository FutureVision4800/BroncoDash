import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { translate } from 'react-i18next';
//import PropTypes from 'prop-types';

        
    
/*
const ClubTile2 = props => (
        
            <div>
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h2 className="bold-text">{ props.clubName }</h2>
                        </div>
                        <div>
                            <h5>Category: { props.clubCategory }</h5>
                            <h5>Contact Info: <a href={"mailto:" + props.clubEmail}>{ props.clubEmail }</a></h5>
                            <h5>More Info: <a href={ props.myBAR }>{ props.myBAR }</a></h5>
                            <h6>{ props.clubDescription }</h6>
                            <button 
                                className="btn btn-primary account__btn"
                                style={{width: "15%", margin: "15px"}} 
                            >
                                Add
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        
);
*/
class ClubTile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentUser: "",
            clubName: props.clubName,
            clubCategory: props.clubCategory,
            clubEmail: props.clubEmail,
            myBAR: props.myBAR,
            clubDescription: props.clubDescription,
            clubID: props.clubID
        };
        //this.componentDidMount = this.componentDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getClub = this.getClub.bind(this);
        this.addClub = this.addClub.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        this.getCurrentUser();
        this.getClub(this.state.clubID);
        //console.log("test1");
        //this.forceUpdate();
        //console.log("test2");
    }

    getClub(clubID){

        console.log("Club ID for search",clubID);
        fetch('/database/getQweryIDClubs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                _id: clubID
            })
        })
        .then(res => res.json()
        .then(data => {
            console.log("return data from QweryID: ",data);
            this.addClub(data);
        }))
        .catch(err => console.log(err));

    }

    addClub(newClub){
        console.log("Current User: ", this.state.currentUser);
        console.log("New Club to be Addded: ", newClub);
        fetch('/users/updateUserClub', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                username: this.state.currentUser,
                addClub: newClub
            })
        })
        .catch(err => console.log(err));
    }

    getCurrentUser(){

        fetch('/api/user/getCurrentUser')
        .then(res => res.json()
        .then(data => {
            if(data.user){
                console.log("Get User: There is a user saved in the server session: ", data.user.username);
                this.setState({ currentUser: data.user.username });
        } 
        else{
            console.log("Get user: no user");
        }
        }))
        .catch(err => console.log(err));

    }

    render(){
        return(   <div>
            <Card>
                <CardBody className="dashboard__card-widget">
                    <div className="card__title">
                        <h2 className="bold-text">{ this.props.clubName }</h2>
                    </div>
                    <div>
                        <h5>Category: { this.props.clubCategory }</h5>
                        <h5>Contact Info: <a href={"mailto:" + this.props.clubEmail}>{ this.props.clubEmail }</a></h5>
                        <h5>More Info: <a href={ this.props.myBAR } 
                                          target="_blank" 
                                          rel="noopener noreferrer" >
                                            { this.props.myBAR }
                                        </a>
                        </h5>
                        <h6>{ this.props.clubDescription }</h6>
                        <button 
                            className="btn btn-primary account__btn"
                            style={{width: "15%", margin: "15px"}}
                            onClick={this.handleSubmit} 
                            
                        >
                            Add
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>);
    }

}
/*
ClubTile.propTypes = {
    key: PropTypes.string,
    clubName: PropTypes.string,
    clubCategory: PropTypes.string,
    clubEmail: PropTypes.string,
    clubDescription: PropTypes.string,
    myBAR: PropTypes.string,
    website: PropTypes.string,
    fb: PropTypes.string,
    ig: PropTypes.string

};
*/

export default translate('common')(ClubTile);


