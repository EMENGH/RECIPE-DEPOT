import React, { Component } from 'react';
import axios from "axios";

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
                recipes: [],
                id: '',
                title: '',
                description: '',
                images: '',
                reviews: ''
        }        
    };
    _addNewRecipe = e => {
        e.preventDefault();
        axios.post("/api/recipe", this.state).then(res => {
          console.log(res.data);
        })
      };
    
  render() {
    return (
      <div>
          Hello from Add recipe
        <form onSubmit={this._addNewRecipe}>
          <label htmlFor="recipe">Cuisine Type: </label>
          <input onChange={this._changeRecipe} type="text" value={this.state.recipe} />
          <br />
            );
          })}
          <button>Save Recipe</button>
        </form>
      </div>
    );
  }
}

export default AddRecipe;