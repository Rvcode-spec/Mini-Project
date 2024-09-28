

const initialState ={
    todos:['ravi' , 'shankar']
}
const todoReducer=(state=initialState,action)=>{
// console.log("add ", action);

switch(action.type){
    case "ADD_TODO":
        return {
                
                    todos:[...state.todos, action.payload]
                };
                default:
                        return state; 

                        case "DELETE_TODO":
                            let filtereddata=state.todos.filter((todo)=>todo!==action.payload)
                
                            console.log(filtereddata);
                            
                            return{
                                ...state,
                                todos:filtereddata
                            
                            }
       
    }

    

 
}
export default todoReducer;