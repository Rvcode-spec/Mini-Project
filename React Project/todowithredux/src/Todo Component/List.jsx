import React from 'react'
import { useSelector } from 'react-redux';

// import store from '../Store/store';

function List() {
    

    const todos = useSelector((store) => store.todos);

  
  return (
    <div>
      <ul class="list-group">
        {
            todos.length>0? todos.map((todos,index)=>{
                return <li class="list-group-item" key={index}>{todos}</li>
            }): <li class="list-group-item">No todo</li>
        }

</ul>
    </div>
  )
}

export default List
