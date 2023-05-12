import Nav from "../../../nav";
import TodoItem from "./todo-item";
import todos from "./todos.json";

const TodoList = () => {
    return (
        <>
            <Nav/>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return (<TodoItem todo={todo}/>)
                    })
                }
            </ul>

        </>
    )
}

export default TodoList;