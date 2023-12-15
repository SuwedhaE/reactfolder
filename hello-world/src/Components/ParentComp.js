import React, { Component } from 'react'
import RegComp from './RegComp'
import PComp from './PComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Swetha'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Swetha'
            })
        }, 2000)
    }

  render() {
    console.log('************************** parent comp****************************')
    return (
      <div>ParentComp
        <MemoComp name={this.state.name}/>
        <RegComp name={this.state.name}/>
        <PComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp