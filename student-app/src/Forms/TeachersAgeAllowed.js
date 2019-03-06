import React, {Component} from 'react'

class TeachersAgeAllowed extends Component{
  render(){
    const teachers = this.props.teachers.filter(teacher=>teacher.age > 50)
    const teachersAllowed = teachers.map((teacher, key)=>{
      return(
        <tr key={key}>
          <td>Name: {teacher.name}</td>
          <td>Age: {teacher.age}</td>
        </tr>
      )
    })

    return(
      <div>
      <h1>Teachers Allowed</h1>
      <table>
        <tbody>
          {teachersAllowed}
        </tbody>
      </table>
      </div>
    )
  }
}


export default TeachersAgeAllowed
