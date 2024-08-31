import React, { Component, useState } from 'react'
export default class Input extends Component {
    constructor(props){
      console.log("hkkk",props)
        super(props)
        this.state=({
          
           todo: ''

        })
    }

    changeinput=(event)=>{
        // console.log(event.target.value);
        this.setState({
          todo:event.target.value

        })
        // console.log(event.target.value);
        
        
    }
     submitadd=(event)=>{
      event.preventDefault();

      if(this.state.todo?.length>0){
        this.props.addtodo(this.state.todo)
      }
      // if (this.state.todo.length > 0) {
      //   this.props.addtodo(todo); // this prop is passed correctly
      //   // this.setState({ todo: '' }); // Clear the input field
      // } 

    }
   

    componentDidMount(){
      console.log(this.props,"kkkk");
      
    

    }
  render() {
    return (

      <div>

        <form action="" onSubmit={this.submitadd}>
        <input type="text" 
        placeholder='Enter the Todo' 
        value={this.state.todo}
        onChange={this.changeinput}
        
        />

        <button type="button" className='btn btn-success' onClick={this.props.addtodo}
        
        >Add</button>
        </form>
      </div>
    )
  }
}
