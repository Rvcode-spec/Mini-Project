import React, { useState } from 'react'

function Input() {
    let [todo,setdodo]=useState('ravi');

    const changeinput =(e)=>{
        console.log(e.target.value);
        setdodo(e.target.value)
    
    }

    const sumbit=(event)=>{
        event.preventDefault();
        
    }
  return (
    <div>
            <input type="text" placeholder='Enter the todo' onChange={changeinput} />
            <button>Add No</button>
    </div>

  )
}

export default Input
