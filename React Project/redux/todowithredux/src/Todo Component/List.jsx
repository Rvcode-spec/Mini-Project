import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function List() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const [edittodo, setedittodo]=useState(null);
  

  const deletetodo = (index) => {
    console.log("Delete function fired");
    console.log(index);
    dispatch({
      type: "DELETE_TODO",
      payload: index,

    });
  };

  const todoedit=(oldtodo)=>{
    console.log("this toto");
    
    dispatch({
      type:'EDIT_TODO',
      payload:{oldtodo, todo:edittodo},
      
    })
  }

  return (
    <div>
      <ul className="list-group">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li className="list-group-item" key={index}>
              <div className='d-flex justify-content-between align-items-center'>
                <span>{todo}</span>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => deletetodo(todo)} 
                >Delete</button>

                <button className='btn btn-primary' onClick={todoedit}>
                  Edit</button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No todo</li>
        )}
      </ul>
    </div>
  );
}

export default List;
