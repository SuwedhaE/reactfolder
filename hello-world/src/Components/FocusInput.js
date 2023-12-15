import React, { Component } from 'react'
import Inputs from './Inputs'
 
class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.FocusInputs()
    }

  render() {
    return (
      <div>
        <Inputs ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput