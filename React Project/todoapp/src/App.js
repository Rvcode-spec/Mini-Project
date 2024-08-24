import { useState } from "react";
import Input from "./Todo App/Input";
import List from "./Todo App/List";
function App() {

    const[todos, settodos]=useState(["Ravi","Rahul", "Rohit"])

    const addtodo=(value)=>{

        settodos([...todos, value])


    }

    const deletetodo=(value)=>{
      console.log(value);
      
      console.log("delete todo fired ");
  
      const filtertodos=todos.filter((todo)=>todo !==value);
      console.log(filtertodos);
      settodos(filtertodos)
  }

  const edittodo=()=>{
    // console.log();
    console.log("edit todo fired ");
  }
    
  return (
    <div className="App">

      {/* <h1>Hello</h1> */}
      <Input addtodo={addtodo} />
      <List todos={todos} deletetodo={deletetodo} edittodo={edittodo}/>
    
    </div>
  );
}

export default App;
