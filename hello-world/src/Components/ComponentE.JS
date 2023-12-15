import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
    static contectType = UserContext
  render() {
    return (
        <div>
            {/* Component E context {this.context} */}
            <ComponentF/>
        </div>
    )
  }
}

// ComponentE.contextType = UserContext

export default ComponentE