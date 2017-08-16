import React, { Component } from 'react';
import axios from "axios";
import styled, { keyframes } from 'styled-components';

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

    const AddRecipePage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: red;
    background-image: url("http://i.imgur.com/OVZVkEd.jpg");    
    background-size: cover;

    div {
        font-size: 40px;
        color: white;
    }
`
    return (
        <AddRecipePage>
      <div>
         Add recipe
        <form onSubmit={this._addNewRecipe}>
          <label htmlFor="recipe">Please enter the Cuisine Type: </label>
          <input onChange={this._changeRecipe} type="text" value={this.state.recipe} />
          <br />
        
          <button>Save Recipe</button>
        </form>
      </div>
      </AddRecipePage>
    );
  }
}

export default AddRecipe;