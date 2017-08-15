import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RecipeDescription extends Component {
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
        const recipeDesc = this.props.match.params.recipeDesc;
        console.log(recipeDesc);
        axios.get(`/api/recipe/description${recipeDesc}`).then((res) => {
            console.log(res);
            const newState = {...this.state};
            newState.recipes = res.data;
            console.log(newState);

            this.setState(newState);
        }).catch((err) => {
            console.log("there was a error");
            console.log(err)
        })
    }
    
    render(){
        return (
        <div>
            
            {this.state.recipes.map((recipe, index) => {
                return <h1>{recipe.title}</h1>;
                return <h1>{recipe.description}</h1>;
                return <h1>{recipe.images}</h1>;
                return <h1>{recipe.reviews}</h1>;
            })}
        </div>
         ) }
}

export default RecipeDescription;