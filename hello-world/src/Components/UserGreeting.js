import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render(){

    return this.state.isLoggedIn && <div>Welcome Swetha</div>  //it only shows the true value and for false it returns nothing

    // 3 return (
    //     this.state.isLoggedIn ?
    //     <div>Hello Swetha</div>  :
    //     <div>Welcome Guest</div>
    // )

    //2 let message
    // if (this.state.isLoggedIn){
    //     message = <div>Hello Swetha</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>  2

    // 1 if (this.state.isLoggedIn){
    //     return <div> Hello swetha</div>
        
    // }else {
    //     return <div> Welcome Guest</div>
    // } 1
  
    // return (
    //   <div>
    //     <div>Hello swetha</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting