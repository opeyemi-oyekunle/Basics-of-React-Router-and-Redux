import React, {Component} from 'react'
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
          <td><a href="#">{post.title}</a></td>
          <td>{post.body}</td>
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
