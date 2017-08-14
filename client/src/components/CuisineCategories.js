import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CuisineCategories extends Component {
    render(){
        return (
        <div>
            <h1>What type of food would you like to review</h1>

            LIST OF BUTTONS THAT LINK TO /italian, /japanaese, /mexican, /vegan, 
            <Link to="/italian"><button>Italian</button></Link>
        </div>
         ) }
}

export default CuisineCategories;