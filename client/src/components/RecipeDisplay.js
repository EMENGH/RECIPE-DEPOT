import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RecipeDisplay extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            title: '',
            description: '',
            images: '',
            reviews: ''
        }
    }

    componentWillMount(){
        const recipeCategory = this.props.match.params.recipeCategory;
        axios.get(`/api/recipe/${recipeCategory}`).then((res) => {
            console.log(res);
            this.setState({
                id: res.data.id,
                title: res.data.title,
                description: res.data.description,
                images: res.data.images,
                reviews: res.data.reviews
            });
        });
    }
    
    render(){
        return (
        <div>
             {this.state.id}
             {this.state.title}
        </div>
         ) }
}

export default RecipeDisplay;