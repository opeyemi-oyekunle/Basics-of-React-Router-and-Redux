import React, {Component} from 'react'

class Students extends Component{
  render(){
    const students = this.props.students.map((student, key)=>{
      return(
        <tr key={key}>
          <td>Name: {student.name}</td>
          <td>Score: {student.score}</td>
        </tr>
      )
    })
    return(
      <table>
        <tbody>
          {students}
        </tbody>
      </table>
    )
  }
}

export default Students
