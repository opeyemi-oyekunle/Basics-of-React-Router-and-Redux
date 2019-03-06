import React, {Component} from 'react'
import AddStudents from './AddStudents'
import {Redirect} from 'react-router-dom'
import CursiveFont from './CursiveFont'

class Students extends Component{
  state = {
   students:[
     {'name':'Oyekunle Opeyemi', 'score': 92},
     {'name':'Moyin Akinbolwale', 'score': 52},
     {'name':'Adeferanmi Tolulope', 'score': 32},
   ]
 }
 redirect = {direct:null};
  addStudents = (student)=>{
    if (student.score < 40) {
      this.redirect.direct = <Redirect to='./home' />
    }
    let students = [...this.state.students, student]
    this.setState({
      students:students
    })
  }
  render(){
    const students = this.state.students.map((student, key)=>{
      return(
        <tr key={key}>
          <td>Name: {student.name}</td>
          <td>Score: {student.score}</td>
        </tr>
      )
    })

    return(
      <div style={this.props.styles}>
      {this.redirect.direct}
      <table>
        <tbody>
          {students}
        </tbody>
      </table>
      <AddStudents addStudents={this.addStudents} />
      </div>
    )
  }
}

export default CursiveFont(Students)
