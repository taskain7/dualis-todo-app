import Todo from "./Todo";

interface TodoItemProps {
    todo: Todo,
    onRemove: () => void;
}

function TodoItem(props: TodoItemProps) {

    return (
        <div>
        <li>{props.todo.name}</li>
        <button onClick={props.onRemove}>Delete</button>
        </div>
    );
}

export default TodoItem;
