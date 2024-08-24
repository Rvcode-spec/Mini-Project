import React from 'react'

export default function List(props) {
    // console.log(props);
    
  return (
    <div>
            <ul class="list-group mx-5">

                {
                    props.todos.length>0?props.todos.map((todo,index)=>{
                      return  <li class="list-group-item d-flex justify-content-between" key={index}>
                        <div>{todo}</div>

                        <div>
                        <button 
                    className='btn-danger'
                    onClick={()=>props.deletetodo(todo)}
                    
                    >Delete</button>

                        <button className='btn-warning mx-3' onClick={()=>{props.edittodo()}}>Edit</button>
                        
                    
                    
                    </div>

                    
                        
                        </li>
                    }): <li class="list-group-item">no todo</li>
                }    
</ul>
    </div>
  )
}
