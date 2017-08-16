import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      redirect: false,
      users: []
    }
  }

  componentWillMount(){
    axios.get('localhost:3001/api/user').then(res => {
      console.log(res.data);
      this.setState({users: res.data})
    });
  }

  render() {

    const HomePage = styled.div`
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
        font-size: 70px;
    
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


    a{
        color: white;
        font-size: 35px;
        border-radius: 20px;
        text-decoration: none;
        background-color: red;
        opacity: 0.8;
        padding: 20px 30px;
    }
`
    return (
        <HomePage>
      <div>

        <h1>WELCOME TO RECIPE DEPOT</h1>
        <p>The main purpose of this application is to offer a channel to explore, discover, and contribute to create a great collection of recipes. This repository is organized by cuisine types like chinese, italian, etc, to facilitate finding a particular recipe. It also offers the possibility to look at recipe reviews or add reviews to a specific recipe. This may give you a handy tool to choose from popular concoctions and perhaps it may encourage you to try some of these popular dishes..</p>
        
        <Link to="/selectcuisine">Begin</Link>
      </div>
      </HomePage>
    );
  }
}

export default Home;