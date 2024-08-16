
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()

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

        this.reset=()=>{
            this.setState({
                count: 0
            })
        }

    }

  render() {
    return (
      <div>
        <div>
            <h1>----------------------------------------------------</h1>
            <p className='Qu'>Q.10:- Counter App in Class Component</p>
            <p className='Ans'>Count:- {this.state.count}</p>    
        <button onClick={this.inc}>inc</button>
         <button onClick={this.dec}>dec</button>
         <button onClick={this.reset}>Reset</button>
         </div>
      </div>
    )
  }
}



 
  

