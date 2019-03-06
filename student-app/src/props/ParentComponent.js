import React, {Component} from 'react'
import NestedComponent from './NestedComponent'

class ParentComponent extends Component{
  render(){
    return(
      <div>
        <h1>These are the list of students in my class:</h1>
        <NestedComponent studentClass="Year 2" studentSchool="OAU"/>
      </div>
    )
  }
}

export default ParentComponent
