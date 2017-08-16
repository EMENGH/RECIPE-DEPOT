import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import AddRecipe from "./components/AddRecipe";
import CuisineCategories from './components/CuisineCategories';
import RecipeDisplay from './components/RecipeDisplay';
import RecipeDescription from './components/RecipeDescription';
import DeleteRecipe from "./components/DeleteRecipe";

const FirstPage = () => (
  <div>
  <h1>WELCOME TO RECIPE DEPOT</h1>
  <link to="Home"><button>Click on the Next button to begin</button></link>
  <br/>
  </div>
)

class App extends Component {

  render() {

    // add const definitions of each component where you specifically pass down the state
const descriptionComponent = () => (
  <RecipeDescription RecipeInfo={this.state} />);


    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/add-recipe">Add Recipe</Link>
            <Link to="/delete-recipe">Delete Recipe</Link>            
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/selectcuisine" component={CuisineCategories} />
            <Route exact path="/recipe/:recipeCategory" component={RecipeDisplay} />
            <Route exact path="/recipe/:cuisine/:recipetitle" render={descriptionComponent} />
            <Route exact path="/delete-recipe" component={DeleteRecipe} />
          </div>
        </div>
      </Router>
    );  
  }
}

export default App;
