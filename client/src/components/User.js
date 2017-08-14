import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        Hello From User
        {this.props.match.params.userId}
      </div>
    );
  }
}

export default User;