import React, { createContext, useState } from 'react'

const TodoApicontext=createContext();
const Todoprovider = ({children}) => {
    const [todo, settodo]=useState(['']);
  
  
    const addtodo=(task)=>{
      settodo([...todo,task])
      console.log('Todo added:', task);
      
    }
    const removetodo=(index)=>{
        const newtodo=[...todo];
        newtodo.splice(index,1);
        settodo(newtodo)
    }
  return (
    <TodoApicontext.Provider value={{ todo, settodo, addtodo, removetodo }}>
    {children}
    </TodoApicontext.Provider>
  )
}

export {TodoApicontext, Todoprovider}