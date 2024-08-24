import React, { useState } from 'react'

export default function Input(props) {

    // console.log("coming props", props);
    

      const[todo,settodo]=useState("")
      const[error,seterror]=useState(true);
      const  changetodo=(event)=>{
        // console.log(event.target.value);
        settodo(event.target.value);

        if(event.target.value.length>0){
          seterror(false)
          settodo(event.target.value)
          // seterror(false)
        }else{
          seterror(true)
        }
      }
      

      

      const submitadd=(event)=>{
            event.preventDefault()
            // console.log("fighter submit");
            props.addtodo(todo)

            settodo("")

            if(todo.length>0){
              props.addtodo(todo)
        
            }else{
              seterror(true)
            }
            settodo("")
      }


  return (
    <div>
 <form class="row g-3 mx-4" onSubmit={submitadd}>
  <div class="col-auto mx-5" >
    <input type="text" 
     class="form-control-plaintext" 
     placeholder='Enter th Todo' 
     value={todo}
     onChange={changetodo}/>



     {

        error &&  <p className='text text-danger'>Enter some todo to continue</p>
     }


  </div>
  <div class="col-auto">
    <button type="submit" 
    class="btn btn-primary mb-3">ADD</button>
    
  </div>
</form>
      
    </div>
  )
}
