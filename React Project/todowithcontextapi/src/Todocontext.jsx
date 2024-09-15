import React, { createContext, useState } from 'react'

const TodoApicontext=createContext();
const Todoprovider = ({children}) => {
    const [todo, setTodo]=useState([""]);
    
    const addtodo=(task)=>{
      setTodo([...todo,task])
    }
    const removetodo=(index)=>{
        const newtodo=[...todo];
        newtodo.splice(index,1);
        setTodo(newtodo)
    }
  return (
    <TodoApicontext.Provider value={{todo,addtodo,removetodo}}>
    {children}
    </TodoApicontext.Provider>
  )
}

export {TodoApicontext, Todoprovider}