import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Students from './Students'
import Teachers from './Teachers'
import Posts from './Posts'
import Post from './Post'

class App extends Component {
    render(){
      return(
        <div>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/students" component={Students} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/:id" component={Post} />
        </div>

      )
    }
}

export default App
