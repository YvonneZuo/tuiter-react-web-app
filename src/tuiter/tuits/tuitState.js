import { useDispatch } from "react-redux"
import { toggleLike } from "./tuits-reducer"

const TuitState = ({tuit}) => {
    const dispatch = useDispatch()
    const heartClickHandler = (tuit) => {
        dispatch(toggleLike(tuit))
    }


    return (
        <div className="row mt-2">
            <div className="col-3">
                <i className="bi bi-chat"></i>
                <span className="ms-2">{tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i>
                <span className="ms-2">{tuit.retuits}</span>
            </div>
            <div className="col-3">
                <i onClick={() => heartClickHandler(tuit)}
                    className={`bi ${tuit.liked? 'bi-heart-fill text-danger': 'bi-heart'}`}></i>
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>

    )
}

export default TuitState
