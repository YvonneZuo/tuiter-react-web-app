import { useSelector } from "react-redux";
import TuitItem from "./tuitItem";

const NewHomeComponent = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <div className="list-group">
            {tuitsArray.map(tuit =>
                <TuitItem key={tuit.id} tuit={tuit}/>
            )}
        </div>

    )
}

export default NewHomeComponent;