import React, { Component } from 'react'
import axios from 'axios'
// import UserService from '../services/UserService'

class Project extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users: []
      }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/albums')
         axios.get('http://localhost:8080/api/users')
        // axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            console.log(response)
            this.setState({users: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
    
  render() {
    return (
      <div>
        <div className='container'>
            <h1 className='text-center'> Users List </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user => <tr key = {user.id}>
                                <td> {user.id} </td>
                                <td> {user.firstName} </td>
                                <td> {user.lastName} </td>
                                <td> {user.email} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default Project