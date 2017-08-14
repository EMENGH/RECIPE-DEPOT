import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

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
    return (
      <div>
        {/* <div>
          <h1>What is your username?</h1>
          <input type="text" name="user" />
          <button>New User</button>
        </div> */}
        {/* {this.state.users.map((user, i) => (
          <div key={i}>
            <Link to={`/user/${user._id}`}>
              {user.user}'s User
            </Link>
          </div>
        ))} */}
        <h1>WELCOME TO RECIPE DEPOT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident qui veniam, tempora a quas hic cumque eveniet, odit vel ipsa. Iusto qui aperiam repellat in, hic nobis consequuntur obcaecati!</p>
        <Link to="/selectcuisine">Next</Link>
      </div>
    );
  }
}

export default Home;