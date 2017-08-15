import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import AddRecipe from "./components/AddRecipe";
import CuisineCategories from './components/CuisineCategories';
import RecipeDisplay from './components/RecipeDisplay';
import RecipeDescription from './components/RecipeDescription';

const FirstPage = () => (
  <div>
  <h1>WELCOME TO RECIPE DEPOT</h1>
  <link to="Home"><button>Click on the Next button to begin</button></link>
  <br/>
  </div>
)

class App extends Component {

  // move the state from Recipe Display up here so you can pass it to any component 

//   constructor() {
//     super();
//     this.state = {
//         recipes: [],
//         id: '',
//         title: '',
//         description: '',
//         images: '',
//         reviews: ''
//     }
//   } 

//   componentWillMount(){
//     const recipeCategory = this.props.match.params.recipeCategory;
//     console.log(recipeCategory);
//     axios.get(`/api/recipe/${recipeCategory}`).then((res) => {
//         console.log(res);
//         const newState = {...this.state};
//         newState.recipes = res.data;
//         console.log(newState);

//         this.setState(newState);
//     }).catch((err) => {
//         console.log("there was an error");
//         console.log(err)
//     })
// }



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
          </div>
          <div>
            <Route path="/" component={Home} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/selectcuisine" component={CuisineCategories} />
            <Route exact path="/recipe/:recipeCategory" component={RecipeDisplay} />
            <Route exact path="/recipe/:cuisine/:recipetitle" render={descriptionComponent} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
