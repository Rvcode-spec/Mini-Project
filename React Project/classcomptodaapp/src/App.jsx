import React, { Component } from 'react'
import Input from './ClassCompTodoApp/Input'
import List from './ClassCompTodoApp/List'
export default class App extends Component {
  constructor(){
    super() 
    this.state={
      todos: ['Ravi','Shankar', "Sukha", "Rohan"]
    
  }
  

      
  }


  addtodo(value){
    // console.log("coming value ",value);
    this.setState({
      todos:[...this.state.todos,value]
    })

    // this.setState([...todos, value])
    // todos: [...this.state.todos, value]
}
  render() {
    return (
      <div>
          <Input addtodo={this.addtodo}/>
          <List todos={this.state.todos}/>
  </div>
      
       
        
      
    )
  }
}

