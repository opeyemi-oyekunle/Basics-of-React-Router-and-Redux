import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './styles.css'

class Post extends Component{
  constructor(){
    super();
    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    .then(res=>{
      this.setState({posts:[res.data]})
    })
  }
  render(){
    const post = this.state.posts.map(post=>{
      return(
        <tr key={post.id}>
          <td>{post.id}</td>
          <td><Link to={`${this.props.match.url}`}>{post.title}</Link></td>
          <td>{post.body}</td>
        </tr>
      )
    })
    return(
      <div>
        <h1 className="text-center">Post {this.props.match.params.id}</h1>
        <table className="post-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {post}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Post
