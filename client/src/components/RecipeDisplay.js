import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        return (
        <div>
            
            {this.state.recipes.map((recipe, index) => {
                return <button><h1>{recipe.title}</h1></button>;
            })}
        </div>
         ) }
}

export default RecipeDisplay;