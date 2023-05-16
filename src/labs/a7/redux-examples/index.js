import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import HelloReduxExampleComponent from "./hello-exmple-component"
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component";


// const store = createStore(hello) deprecated
// const store = configureStore(hello)

// And store the common convention name for redux
const store = configureStore({
    reducer: {hello, todos}
})

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Example</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    )
}

export default ReduxExamples