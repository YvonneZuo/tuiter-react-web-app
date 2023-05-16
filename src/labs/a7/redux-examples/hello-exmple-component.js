import { useSelector } from "react-redux"

const HelloReduxExampleComponent = () => {
    // the state represents the current state of the redux store
    const message = useSelector((state) => state.hello.message)
    return (
        <h3>{message}</h3>
    )
}

export default HelloReduxExampleComponent