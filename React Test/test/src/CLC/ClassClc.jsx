
import React, { Component } from 'react'

export default class ComponentLifecycle extends Component {
    constructor(){
        super()
        console.log("step 1:- constructor");

        this.state={
            count:0
        }

        this.inc=()=>{
            this.setState({
                count: this.state.count+1
            })
        }
        this.dec=()=>{
            this.setState({
                count:this.state.count-1
            })
        }

    }
    componentDidMount(){
        console.log("step 2:- componentdidmount");
        
    }


  render() {
    return (
      <div>
        <div>
        <h1>----------------------------------------------------</h1>
            <p className='Qu'>Q.7 Component Life Cycle</p>
           <p>Counter = {this.state.count}</p>
           <button onClick={this.inc}>inc</button>
         <button onClick={this.dec}>dec</button>
         </div>
      </div>
    )
  }
}



 
  

