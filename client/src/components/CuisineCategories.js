import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CuisineCategories extends Component {
    render(){
        return (
        <div>
             <h1>What type of food would you like to review</h1>
             <ul> 
                <Link to="/recipe/italian"><button>Italian</button></Link>
                <Link to="/recipe/salads"><button>Salads</button></Link>
                <Link to="/recipe/chinese"><button>Chinese</button></Link>
            </ul>

        </div>
         ) }
}

export default CuisineCategories;