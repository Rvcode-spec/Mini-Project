import React, { useState } from 'react'
export default function AppFu() {
    const [count, setCount] = useState();

    const inc = () => {
        setCount(count + 1); // Corrected usage of setCount
    };

    const dec = () => {
        setCount(count - 1); // Decrement function
    };

    const res = ()=>{
        setCount (0);
    }

    return (
        <div>
              <h1>----------------------------------------------------</h1>
            <p className='Qu'>Q.10:- Counter App in Function Component</p>
            <p className='Ans'>counter:- {count}</p> 
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={res}>Reset</button>
        </div>
    );
}

