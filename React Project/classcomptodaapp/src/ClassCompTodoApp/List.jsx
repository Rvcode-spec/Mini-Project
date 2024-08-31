import React, { Component } from 'react'
export default class List extends Component {
    constructor(props){
        super(props)
        console.log(this.props.todos);
        this.state={ 
        }
    }
  render() {
    return (
      <div >


<ul class="list-group">
    {
        this.props.todos?.length>0?this.props.todos.map((todo,index)=>{
            return <li className="list-group-item" key={index}>{todo}</li>
            
        }):<li class="list-group-item">No Add</li>
    }
    
</ul>
        
      </div>
    )
  }
}
