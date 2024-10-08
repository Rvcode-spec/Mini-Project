import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Input() {
    const [todo, setTodo] = useState("");  // State to store the current todo
    const [error, setError] = useState(false); // State to track errors
    const dispatch = useDispatch();

    const changeInput = (e) => {
        setTodo(e.target.value);  // Set the todo value on input change
        if (e.target.value.length > 0) {
            setError(false);  // Clear error if input is valid
        }
    };

    const submit = (event) => {
        event.preventDefault();
        if (todo !== "") {
            dispatch({
                type: "ADD_TODO",
                payload: todo
            });
            setTodo("");  // Clear input after submission
        } else {
            setError(true);  // Set error if input is empty
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter the todo" 
                onChange={changeInput}  // Input change handler
                value={todo}  // Bound input value to the state
                className='w-50'  // Fixed width class
            />
            
            {error && <p className='text-danger'>Enter some todo to continue</p>}  {/* Error message if input is empty */}

            <button onClick={submit} className="btn btn-primary mt-2">Add Todo</button>
        </div>
    );
}

export default Input;
