

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
    }
}
export default todoReducer;