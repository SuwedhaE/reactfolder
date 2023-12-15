import React, { Component } from 'react'
import './style.css'
import './data.json'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [] ,
         errorMsg: ' '
      }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/albums')
         axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
  render() {
    const { posts, errorMsg } =this.state
    return (
      <div>
        <h1>List of posts</h1>
        {
            posts.length ?
            posts.map(post => 
              <div key={post.id}>
              <table>
                <tr>
                  <th>UserId</th>
                  <th>Id</th>
                  <th>Title</th>
                  {/* <th>Email</th> */}
                  <th>Body</th>
                </tr>
                {posts.map(post => (
                  <tr>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    {/* <td>{post.email}</td> */}
                    <td>{post.body}</td>
                  </tr>

                ))}
              </table>
            </div>

            ):
            null
        }
        {
            errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}

export default PostList