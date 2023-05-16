import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addTodo, deleteTodo, toggleTodo} from "./reducers/todos-reducer";

const Todos = () => {
    const todos = useSelector(state => state.todos);

    // The useState hook returns an array with two elements:
    // 1. the current state value 2. a function to update the state value.
    // the value in the () is the inital value assigned to the state
    const [todo, setTodo] = useState({do: ''})

    const dispatch = useDispatch();

    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        }
        setTodo(newTodo);
    }

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    const toggleTodoDone = (todo) => {
        dispatch(toggleTodo(todo))
    }

    return (
        <>
        <h3>Todos</h3>
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={createTodoClickHandler}
                        className="btn btn-primary float-end">Create</button>
                <input className="form-control w-75"
                    onChange={todoChangeHandler}
                    value={todo.do}/>
            </li>
            {
                todos.map((todo, index) =>
                    <li className="list-group-item">
                        {/* () => {} avoid infinite loop */}
                        {/* When you use the onClick event handler without an arrow function (() => {}),
                        the function is invoked immediately when the component renders
                         instead of waiting for the button click event.  */}

                        <button onClick={() => deleteTodoClickHandler(index)}
                                className="btn btn-danger float-end">
                        Delete
                        </button>
                        <input onChange={() => toggleTodoDone(todo)}
                                type="checkbox"
                                className="me-2"/>

                        {todo.do}
                    </li>
                )
            }
        </ul>

        </>

    );
};

export default Todos