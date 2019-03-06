import React, {Component} from 'react'
import AddStudents from './AddStudents'
import DeleteStudents from './DeleteStudents'
import './Styles.css'


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
          <td>{student.name}</td>
          <td>{student.score}</td>
        </tr>
      )
    })
    return(
      <div>
      <table className="student-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
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
