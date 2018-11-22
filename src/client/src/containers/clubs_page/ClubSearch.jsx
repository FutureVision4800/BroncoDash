import React, { PureComponent } from 'react';
import { Card } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import SearchIcon from 'mdi-react/SearchIcon';

export default class ClubSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
        inputOpen: false,
        qwery: ""
    };
    this.onInputOpen = this.onInputOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onInputOpen(event) {
    event.preventDefault();
    this.setState({ inputOpen: !this.state.inputOpen });
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.qwery);
    this.props.callbackFromClubPage(this.state.qwery);
  }

  render() {
    return (
    <Card>
      <form className="topbar__search material-form">
        <TextField
            className={`material-form__field topbar__search-field${this.state.inputOpen ?
                ' topbar__search-field--open' : ''}`}
            placeholder="Search"
            name="qwery"
            value={this.state.qwery}
            onChange={this.handleChange}
        />
        <button className="topbar__btn" onClick={this.onInputOpen}>
          <SearchIcon />
        </button>
      </form>
    </Card>
    );
  }
}
