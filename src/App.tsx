import React, {useState} from 'react';
import './App.css';
import TodoItem from "./TodoItem";
import Todo from "./Todo";

function App() {

  const [todos, setTodos] = useState(() => [new Todo('Boltba menni'), new Todo('Kutyát etetni')]);

  function onRemove(todo: Todo) {
    const updatedTodos = todos.filter(it => it !== todo);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <ul>{todos.map((todo, i) => (<TodoItem key={i} todo={todo} onRemove={() => onRemove(todo)}/>))}</ul>
    </div>
  );
}

export default App;
