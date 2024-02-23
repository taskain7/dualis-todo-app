import Todo from "./Todo";

interface TodoItemProps {
    todo: Todo,
    onRemove: () => void;
}

function TodoItem(props: TodoItemProps) {

    return (
        <div>
        <p>{props.todo.name}</p>
        <button onClick={props.onRemove}>Delete</button>
        </div>
    );
}

export default TodoItem;
