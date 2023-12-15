import React, { Component } from 'react'
import './style.css'
import './data.json'
import axios from 'axios'

class T extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [] ,
         errorMsg: ' '
      }
    }

    componentDidMount() {
         axios.get('https://5r6nlzhyk5a6tdrdn7zgpcm22i.appsync-api.us-east-1.amazonaws.com/graphql')
        //  axios.get('https://jsonplaceholder.typicode.com/posts')
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
                  {/* <th>UserId</th> */}
                  <th>id</th>
                  <th>name</th>
                  {/* <th>Email</th> */}
                  <th>dept</th>
                </tr>
                {posts.map(post => (
                  <tr>
                    {/* <td>{post.userId}</td> */}
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    {/* <td>{post.email}</td> */}
                    <td>{post.dept}</td>
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

export default Appsync