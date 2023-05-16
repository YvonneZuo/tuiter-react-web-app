import { createSlice } from "@reduxjs/toolkit"

const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
      },
      {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
      },

]


// createSlice()
// Takes: an object with three properties:
// name, initalState, reducers
// if you do not pass reducers, it will automatically generate reducer functions based on its name
// Returns:
// Reducer and actions
const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: {
        // the state referes to the current state the reducers associated
        // here refers to the current state of the todosSlice
        addTodo(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                do: action.payload.do,
                done: false
            })
        },
        deleteTodo(state, action) {
            const index = action.payload
            state.splice(index, 1) // start from index delte one
        },
        toggleTodo(state, action) {
            const todo = state.find((todo) => todo._id === action.payload._id)
            todo.done = !todo.done
        }
    }

}
)
export const {addTodo, deleteTodo, toggleTodo} = todosSlice.actions
export default todosSlice.reducer