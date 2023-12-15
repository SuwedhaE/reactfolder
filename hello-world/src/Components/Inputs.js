import React, { Component } from 'react'

export class Inputs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
      }
  
      focusInputs(){
          this.inputRef.current.focus()
      }
  
  
    render() {
      return (
        <div>
          <input type='text' ref={this.inputRef}/>
        </div>
      )
    }
  }

export default Inputs