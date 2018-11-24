import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';






const ClubTile2 = props => (
    
    
            <div>
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <Divider />
                        <div className="card__title">
                            <h3 className="bold-text">{ props.clubName }</h3>
                        </div>
                        <div>
                            <h5>Category: { props.clubCategory }</h5>
                            <h5>Contact Info: <a href={"mailto:" + props.clubEmail}>{ props.clubEmail }</a></h5>
                            <h5>More Info: <a href={ props.myBAR }>{ props.myBAR }</a></h5>
                            <h6>{ props.clubDescription }</h6>
                            <button 
                                className="btn btn-primary account__btn"
                                style={{width: "15%", marginTop: "15px"}} 
                            >
                                Remove
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
);

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
            clubID: props.clubID,
            makeUpdate: false
        };
        //this.componentDidMount = this.componentDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getClub = this.getClub.bind(this);
        this.removeClub = this.removeClub.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
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
            this.removeClub(data);
        }))
        .catch(err => console.log(err));

    }

    removeClub(removedClub){
        console.log("Current User: ", this.state.currentUser);
        console.log("New Club to be Addded: ", removedClub);
        fetch('/users/removeUserClub', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                username: this.state.currentUser,
                removedClub: removedClub
            })
        })
        .catch(err => console.log(err));
        console.log("test");
       this.forceUpdateHandler();

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

    forceUpdateHandler(){
        this.forceUpdate();
    }

    render(){
        return(   <div>
            <Card>
                <CardBody className="dashboard__card-widget">
                    <Divider/>
                    <div className="card__title">
                        <h2 className="bold-text">{ this.props.clubName }</h2>
                    </div>
                    <div>
                        <h5>Category: { this.props.clubCategory }</h5>
                        <h5>Contact Info: <a href={"mailto:" + this.props.clubEmail}>{ this.props.clubEmail }</a></h5>
                        <h5>More Info: <a href={ this.props.myBAR }>{ this.props.myBAR }</a></h5>
                        <h6>{ this.props.clubDescription }</h6>
                        <button 
                            className="btn btn-primary account__btn"
                            style={{width: "15%", marginTop: "15px"}}
                            onClick={this.handleSubmit} 
                            
                        >
                            Remove
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


/*
class ClubTile extends PureComponent {
    
    
    static proptypes = {
        clubName: PropTypes.string.isRequired,
        clubDescrip: PropTypes.string.isRequired,
    };
    

    constructor(props){
        super(props);
        this.state = {
            clubName: props.clubName,
            clubDescrip: props.clubDescrip,
            clubEmail: props.clubEmail,
            clubCategory: props.clubCategory
        };
    }

    render(){
        return (
            <Col md={12} xl={3} lg={6} xs={12} >
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h2 className="bold-text">{ this.props.clubName }</h2>
                        </div>
                        <div>
                            <h5>Category: { this.props.clubCategory }</h5>
                            <h5>Contact Info: { this.props.clubEmail }</h5>
                            <h6>{ this.props.clubDescrip }</h6>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default translate('common')(ClubTile);
*/
