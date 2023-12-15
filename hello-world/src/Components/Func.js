import React, { Component } from "react";

// function Func(){
//      return(
//         <div>Swetha</div>
//      )
// }

export class Func extends React.Component{

    constructor (props) {
        // this.props
        super(props)

        this.state = {
            name: 'Swetha'
        }
    }
    
    render(){
        // console.log(this.props)
        // const emp = this.state
        return(
            
            
            <div>
                 {this.state.name}    {/*{this.state.children} */}
            </div>

                // React.createElement("div",{id:'den', className:'den1'},React.createElement("h1",{id:'head', className:'den1'},'Swetha'))
                
           
        )
    }
}



// export default Func