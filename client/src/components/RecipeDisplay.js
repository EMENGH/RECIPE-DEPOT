import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecipeDescription from './RecipeDescription';
import styled, { keyframes } from 'styled-components';

class RecipeDisplay extends Component {
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
    }

    componentWillMount(){
        const recipeCategory = this.props.match.params.recipeCategory;
        console.log(recipeCategory);
        axios.get(`/api/recipe/${recipeCategory}`).then((res) => {
            console.log(res);
            const newState = {...this.state};
            newState.recipes = res.data;
            console.log(newState);

            this.setState(newState);
        }).catch((err) => {
            console.log("there was an error");
            console.log(err)
        })
    }
    
    render(){

        const RecipePage = styled.div`
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        color: red;
        background-image: url("http://i.imgur.com/dfhNBeF.jpg");    
        background-size: cover;
    
        h1{
            color: black;
            text-align: center;
            font-size: 25px;       
        }
    `
        return (
            <RecipePage>
        <div> 
            {this.state.recipes.map((recipe, index) => {
                //return <Link to={`/recipe/${recipe.categoryName}/${recipe.title}`}><button><h1>{recipe.title}</h1></button></Link>;
                //<Link to={`/recipe/italian/description`}>{recipe.title}</Link>
                //return <Link to={`/recipes/:recipeId`}>{recipe.title}</Link>
                return  <RecipeDescription
                        key={index}
                        id={index} 
                        recipeInfo={recipe} />               
            })}
        </div>
        </RecipePage>
         ) }
}

export default RecipeDisplay;
