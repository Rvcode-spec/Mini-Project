import React, { useContext } from 'react'
import { TodoApicontext } from '../Todocontext'


const Input = () => {
  // const {todo, settodo}=useContext('')
  const { todo, settodo, addtodo} = useContext(TodoApicontext);
  // const {addtodo}=useContext(TodoApicontext);

  const AddTodo = () => {
      addtodo(todo);  // Call the addtodo function from context
      settodo('');    // Clear the input after adding the todo
    
  };
  
  return (
    <div className='Input-Field'>
      <input type="text"  placeholder='Enter the Todos'
      value={todo} 
      onChange={(e) => settodo(e.target.value)} />
      
      <button onClick={AddTodo}>Add</button>
    </div>
  )
}

export default Input
