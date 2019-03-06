import React, {Component} from 'react'

class StudentsGrades extends Component{
  render(){
    const passedStudents = this.props.students.map((student, key)=>{
      return student.score > 50 ? (
        <tr key={key}>
          <td>Name: {student.name}</td>
          <td>Score: {student.score}</td>
        </tr>
      ) : (
        <tr key={key}>
          <td>Name: {student.name}</td>
          <td>FAILED</td>
        </tr>
      )
    })
    return(
      <div>
      <h1>Grades</h1>
      <table>
        <tbody>
          {passedStudents}
        </tbody>
      </table>
      </div>
    )
  }
}

export default StudentsGrades
