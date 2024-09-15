import React, {useContext} from 'react'
import { TodoApicontext } from '../Todocontext'

const List = () => {
  const {todo,removetodo}= useContext(TodoApicontext)
  return (
  <div className='list-field'>
  <ul className="list-group">
     {
        todo.map((task,index)=>(
          <li key={index}>{task}  
          <button onClick={()=>removetodo(index)}>done</button>
              </li>
      ))
     } 
  
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
    </div>
  )
}

export default List
