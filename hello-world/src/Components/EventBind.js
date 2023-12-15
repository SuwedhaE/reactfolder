import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //  3 this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye'  
    //     })
    //     console.log(this)
    // }                                  1,2,3.

    clickHandler= () => {                        
        this.setState({
            message: 'Good Bye'
        })
    }                                            //4

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1<button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 2<button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>         {/* 4 */}
      </div>
    )
  }
}

export default EventBind