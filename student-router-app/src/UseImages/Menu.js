import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    render(){
      return(
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/students">Students</NavLink></li>
            <li><NavLink to="/teachers">Teachers</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/PictureCollections">Images</NavLink></li>
          </ul>
        </div>

      )
    }
}

export default Menu
