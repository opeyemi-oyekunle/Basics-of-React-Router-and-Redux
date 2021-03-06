import React, {Component} from 'react'
import {Route, Link, NavLink} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Students from './Students'
import Teachers from './Teachers'

class App extends Component {
    render(){
      return(
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/teachers">Teachers</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/students" component={Students} />
          <Route path="/teachers" component={Teachers} />
        </div>

      )
    }
}

export default App
