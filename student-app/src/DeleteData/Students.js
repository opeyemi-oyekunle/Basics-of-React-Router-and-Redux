import React, {Component} from 'react'
import AddStudents from './AddStudents'
import DeleteStudents from './DeleteStudents'

class Students extends Component{
  state = {
    students:this.props.students
  }
  addStudents = (student)=>{
    let students = [...this.state.students, student]
    this.setState({
      students:students
    })
  }
  deleteStudents = (id)=>{
    let students = this.state.students.filter(student=>student.id !== parseInt(id))
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
      <div>
      <table>
        <tbody>
          {students}
        </tbody>
      </table>
      <AddStudents addStudents={this.addStudents} />
      <DeleteStudents deleteStudents={this.deleteStudents} />
      </div>
    )
  }
}

export default Students
