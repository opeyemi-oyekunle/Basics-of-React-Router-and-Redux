import React, {Component} from 'react'
import NestedComponent from './NestedComponent'
import Students from './Students'

class ParentComponent extends Component{
  state = {
   students:[
     {'name':'Oyekunle Opeyemi', 'score': 92},
     {'name':'Moyin Akinbolwale', 'score': 52},
     {'name':'Adeferanmi Tolulope', 'score': 32},
   ]
 }
  render(){
    return(
      <div>
        <h1>These are the list of students in my class:</h1>
        <NestedComponent studentClass="Year 2" studentSchool="OAU"/>
        <Students students={this.state.students} />
      </div>
    )
  }
}

export default ParentComponent
