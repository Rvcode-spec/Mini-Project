import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Input() {
    const [todo, setTodo] = useState("");  // Corrected state variable and setter name
    const[error, seterror]=useState(true)
    const dispatch = useDispatch();  // Moved useDispatch to the top level

    const changeInput = (e) => {
        console.log(e.target.value);
    
        // if(e.target.value.length>0){
            setTodo(e.target.value)
            seterror(false)
           
        //   }else{
        //     seterror(true)
        //     return;
        //   }
        
    }
       

    const submit = (event) => {
        event.preventDefault();
        // Dispatching the action to add a new todo
       if(todo!==""){
        dispatch({
            type: "ADD_TODO",
            payload: todo
        });
        setTodo("")
}else{
    seterror(true);
//  alert("HJJH")
    
} 

     
    };

    return (
        <div>
            {/* Uncomment form tag if form is needed */}
            {/* <form onSubmit={submit}> */}
                <input 
                    type="text" 
                    placeholder='Enter the todo'
                    onChange={changeInput}  // Fixed handler name
                    value={todo}
                />

                
                    {

                        error &&  <p className='text text-danger'>Enter some todo to continue</p>
                     }
                
                <button onClick={submit}>Add Todo</button>
            {/* </form> */}
        </div>
    );
}

export default Input;
