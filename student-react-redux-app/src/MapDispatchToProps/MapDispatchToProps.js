import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class MapDisPatchToProps extends Component{
  handleClick = (id)=>{
    this.props.deleteStudent(id)
  }
  render(){
      const students = this.props.students.map(student=>{
        return(
          <tr key={student.id}>
            <td>{student.id}</td>
            <td><Link to={`${this.props.match.url}/${student.id}`}>{student.name}</Link></td>
            <td>{student.score}</td>
            <td>{student.nationality}</td>
            <td><button onClick={()=>{this.handleClick(student.id)}}>Delete</button></td>
          </tr>
        )
      })
    return(
      <React.Fragment>
        <h2>List of students</h2>
        <table>
          <tbody>
            {students}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state, ownProps)=>{
  return{
    students: state.studentReducer.students
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    deleteStudent: (id)=>{dispatch({type:'DELETE_STUDENT', id:id})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapDisPatchToProps);
