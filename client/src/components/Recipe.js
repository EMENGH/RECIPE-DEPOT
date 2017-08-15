import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div>
        Hello From Recipe
        {this.props.match.params.recipe}
        
      </div>
    );
  }
}

export default Recipe;