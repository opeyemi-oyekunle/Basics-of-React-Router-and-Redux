import React, {Component} from 'react';

class AddStudents extends Component{
      constructor(){
        super();
        this.state = {score:null, name:null}
        this.student = null
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
      }
      handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addStudents(this.state)
      }

      render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={this.handleChange} />
              <label htmlFor="score">Score</label>
              <input type="text" id="score" onChange={this.handleChange} />
              <button type="submit">Submit</button>

            </div>
          </form>
        )
      }
    }

export default AddStudents
