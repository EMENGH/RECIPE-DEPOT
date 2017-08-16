import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

class CuisineCategories extends Component {
    render(){

        const CuisinePage = styled.div`
        display: flex;
        flex-direction: column;
        height: 95vh;
        justify-content: center;
        align-items: center;
        color: red;
        background-image: url("http://i.imgur.com/Q4fVZvt.jpg");
        background-size: cover;
    
        h1{
            color: white;
            text-align: center;
            font-size: 50px;
        
        }
        
        p{
            color: white;
            font-size: 30px;
            border-radius: 20px;
            text-decoration: none;
            background-color: red;
            opacity: 0.8;
            padding: 20px 30px;
        }
        .menuButton {
            color: white;
            font-size: 35px;
            border-radius: 20px;
            text-decoration: none;
            background-color: red;
            opacity: 0.8;
            padding: 15px 55px;
            margin-right: 30px;

        
        }
    `

        return (
            <CuisinePage>
        <div>
             <h1>What type of Cuisine would you like to select</h1> 
                <Link to="/recipe/italian"><button className='menuButton'>Italian</button></Link>
                <Link to="/recipe/salads"><button className='menuButton'>Salads</button></Link>
                <Link to="/recipe/chinese"><button className='menuButton'>Chinese</button></Link>

        </div>
        </CuisinePage>
         ) }
}

export default CuisineCategories;