import React, {Component} from 'react'
import NestedComponent from './NestedComponent'
import Students from './Students'
import Teachers from './Teachers'
import StudentsGrades from './StudentsGrades'
import TeachersAgeAllowed from './TeachersAgeAllowed'


class ParentComponent extends Component{
  state = {
   students:[
     {'id': 1, 'name':'Oyekunle Opeyemi', 'score': 92},
     {'id': 2, 'name':'Moyin Akinbolwale', 'score': 52},
     {'id': 3, 'name':'Adeferanmi Tolulope', 'score': 32},
     {'id': 4, 'name':'Kinjigbe Tanko', 'score': 33},
   ],
   teachers:[
     {'name':'Oyekunle Opeyemi', 'age': 52},
     {'name':'Moyin Akinbolwale', 'age': 78},
     {'name':'Adeferanmi Tolulope', 'age': 43},
   ]
 }
  render(){
    const backgroundStyle = {
      backgroundColor: "black",
      color: "#fff",
      fontFamily:"Cursive",
      border:"2px solid red"
    }
    return(
      <div style={backgroundStyle}>
        <h1 style={{color:"green", textTransform:"uppercase"}}>These are the list of students in my class:</h1>
        <NestedComponent studentClass="Year 2" studentSchool="OAU"/>
        <Students students={this.state.students} />
        <Teachers teachers={this.state.teachers} />
        <StudentsGrades students={this.state.students} />
        <TeachersAgeAllowed teachers={this.state.teachers} />
      </div>
    )
  }
}

export default ParentComponent
