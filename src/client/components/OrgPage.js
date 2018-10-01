import React from 'react';

export default class OrgPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubName: props.clubName,
      clubDescription: props.clubDescription,
    };
  }


  render() {
    return (
      <div>
        <h1>
          { this.props.clubName }
        </h1>
        <h2>
          { this.props.clubDescription }
        </h2>
      </div>
    );
  }
}
