import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RecipeDescription extends Component {
            
            // redirect: false,
            // Recipes: []
        
    

    // componentWillMount(){
    //     const recipeDesc = this.props.match.params.recipeDesc;
    //     console.log(recipeDesc);
    //     axios.get(`/api/recipe/description${recipeDesc}`).then((res) => {
    //         console.log(res);
    //         const newState = {...this.state};
    //         newState.recipes = res.data;
    //         console.log(newState);

    //         this.setState(newState);
    //     }).catch((err) => {
    //         console.log("there was a error");
    //         console.log(err)
    //     })
    // }  
    
    render(){
        return (
        <div>
                 <h1>{this.props.recipeInfo.title}</h1>;
                 <h1>{this.props.recipeInfo.description}</h1>;
                 <h1>{this.props.recipeInfo.images}</h1>;
                 <h1>{this.props.recipeInfo.reviews}</h1>;
        </div>
         ) }
}

export default RecipeDescription;