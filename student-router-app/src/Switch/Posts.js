import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './styles.css'

class Posts extends Component{
  constructor(){
    super();
    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      this.setState({posts:res.data.slice(0, 10)})
    })
  }
  render(){
    const posts = this.state.posts.map(post=>{
      return(
        <tr key={post.id}>
          <td>{post.id}</td>
          <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
          <td>{post.body}</td>
          <td><Link to={`post/${post.id}`}>delete</Link></td>
        </tr>
      )
    })

    return(
      <div>
        <h1 className="text-center">Posts</h1>
        <table className="post-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {posts}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Posts
