import React, { useContext } from 'react'
import { TodoApicontext } from '../Todocontext'


const Input = () => {
  const { todo, settodo, addtodo} = useContext(TodoApicontext);
  // const[error,seterror]=useState(true);
  
  // const  changetodo=(event)=>{
  //   // console.log(event.target.value);
  //   settodo(event.target.value);

  //   if(event.target.value>0){
  //     seterror(false)
  //     settodo(event.target.value)
  //     // seterror(false)
  //   }else{
  //     seterror(true)
  //   }
  // }

  const AddTodo = () => {
      addtodo(todo);  // Call the addtodo function from context
      settodo('');    // Clear the input after adding the todo

      // if(todo.length>0){
      //   addtodo(todo)
  
      // }else{
      //   seterror(true)
      // }
      // settodo("")
    
  };
  
  return (
    <div className='Input-Field'>
      <input type="text"  placeholder='Enter the Todos'
      value={todo} 
      onChange={(e) => settodo(e.target.value)}/>

{/* {

    error &&  <p className='text text-danger'>Enter some todo to continue</p>
} */}
      
      <button onClick={AddTodo}>Add</button>
    </div>
  )
}

export default Input
