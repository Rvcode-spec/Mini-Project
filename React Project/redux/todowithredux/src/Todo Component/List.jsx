import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function List() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const deletetodo = (todo) => {
    console.log("Delete function fired");
    console.log(todo);
    dispatch({
      type: "DELETE_TODO",
      payload: todo,

    });
  };

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

                <button className='btn btn-primary'>
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
