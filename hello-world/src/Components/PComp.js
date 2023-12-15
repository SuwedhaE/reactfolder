import React, { PureComponent } from 'react'

export class PComp extends PureComponent {
  render() {
    console.log('pure comp')
    return (
      <div>PComp {this.props.name} </div>
    )
  }
}

export default PComp