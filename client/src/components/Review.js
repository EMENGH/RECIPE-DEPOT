import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <div>
        Hello From Review
        {this.props.match.params.review}
      </div>
    );
  }
}

export default Review;