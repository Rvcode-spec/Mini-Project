import { useState } from 'react';
import Input from './Todo Component/Input';
import List from './Todo Component/List';

function App() {
  const [todos, setTodos] = useState([]); // initialize as an array

  // Define the deleteTodo function inside the App component
  const deleteTodo = (value) => {
    const filteredTodos = todos.filter((todo) => todo !== value);
    console.log(filteredTodos);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <Input setTodos={setTodos} todos={todos} />  {/* Pass setTodos to add todos */}
      <List todos={todos} deleteTodo={deleteTodo} /> {/* Pass todos and deleteTodo */}
    </div>
  );
}

export default App;
