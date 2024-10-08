import React, {useContext} from 'react'
import { TodoApicontext } from '../Todocontext'

const List = () => {
  const {todo,removetodo}= useContext(TodoApicontext)

  if (!Array.isArray(todo) || todo.length === 0) {
    return <p>No todos available</p>;  // Fallback message if no todos
  }
  return (
  <div className='list-field'>
  <ul className="list-group">
     {
        todo.map>0?((task,index)=>{
          <li key={index}>{task}
          <div>{todo}</div>
          <button onClick={()=>removetodo(index)} className='btn-danger'>Delete</button>
          </li>

        }):<li className="list-group-item" color='#fff'>No todos</li>m
        
      }

</ul>
    </div>
  )
}

export default List
