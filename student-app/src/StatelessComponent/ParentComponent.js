import React, {Component} from 'react'
import NestedComponent from './NestedComponent'
import Students from './Students'
import Teachers from './Teachers'

class ParentComponent extends Component{
  state = {
   students:[
     {'name':'Oyekunle Opeyemi', 'score': 92},
     {'name':'Moyin Akinbolwale', 'score': 52},
     {'name':'Adeferanmi Tolulope', 'score': 32},
   ],
   teachers:[
     {'name':'Oyekunle Opeyemi', 'age': 52},
     {'name':'Moyin Akinbolwale', 'age': 78},
     {'name':'Adeferanmi Tolulope', 'age': 43},
   ]
 }
  render(){
    return(
      <div>
        <h1>These are the list of students in my class:</h1>
        <NestedComponent studentClass="Year 2" studentSchool="OAU"/>
        <Students students={this.state.students} />
        <Teachers teachers={this.state.teachers} />
      </div>
    )
  }
}

export default ParentComponent
