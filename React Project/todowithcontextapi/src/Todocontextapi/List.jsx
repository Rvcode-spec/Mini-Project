import React, { useContext } from 'react'
import { TodoApicontext } from '../Todocontext'
const List = () => {
    const {todo, removetodo}=useContext(TodoApicontext);
  return (
    <div className='list-field'>
        {
            todo.map((task,index)=>(
                <li key={index}>{task}
            <button onClick={removetodo}>Delete</button>
                </li>
            ))
        }

{/* <ul class="list-group">
  <li class="list-group-item">An item</li>
  {/* <button>Delete</button> */}
  {/* <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */} 
      
    </div>
  )
}

export default List
