import React, {useState} from 'react';
import './App.css';
import TodoItem from "./TodoItem";
import Todo from "./Todo";

function App() {

  const [todos, setTodos] = useState(() => [new Todo('Boltba menni'), new Todo('Kutyát etetni')]);
  const [toggleConfirmation, setToggleConfirmation] = useState(false);
  const [selectedTodoToDelete, setSelectedTodoToDelete] = useState<Todo>();

  function handleRemove(todo: Todo) {
    setToggleConfirmation(true);
    setSelectedTodoToDelete(todo);
  }

  function confirmDelete() {
    const todo = selectedTodoToDelete;
    const updatedTodos = todos.filter(it => it !== todo);
    setTodos(updatedTodos);
    setSelectedTodoToDelete(undefined);
    setToggleConfirmation(false);
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      {todos.map((todo, i) => (<TodoItem key={i} todo={todo} onRemove={() => handleRemove(todo)}/>))}
      {toggleConfirmation &&
          <div>
            <p>Confirmation</p>
            <button onClick={confirmDelete}>Confirm</button>
          </div>
      }
    </div>
  );
}

export default App;
