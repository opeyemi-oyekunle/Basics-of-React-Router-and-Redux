import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import MapDispatchToProps from './MapDispatchToProps'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Route path="/students" component={MapDispatchToProps} />

      </BrowserRouter>
    )
  }
}

export default App
