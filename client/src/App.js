import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import AddRecipe from "./components/AddRecipe";
import CuisineCategories from './components/CuisineCategories';
import RecipeDisplay from './components/RecipeDisplay';
import RecipeDescription from './components/RecipeDescription';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/add-recipe">Add Recipe</Link>
          </div>
          <div>
            <Route path="/" component={Home} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/selectcuisine" component={CuisineCategories} />
            <Route exact path="/recipe/:recipeCategory" component={RecipeDisplay} />
            <Route exact path="/recipe/:recipeDescription" component={RecipeDescription} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
