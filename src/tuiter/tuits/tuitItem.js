import TuitState from "./tuitState"

const TuitItem = ({
    tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that/’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      },
}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" width={60} src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <span className="fw-bold">{tuit.userName}  </span>
                    <i className="bi bi-check-circle-fill text-primary"></i>
                    <span> {tuit.handle} . {tuit.time}</span>
                    <div>{tuit.title}</div>
                    <TuitState tuit={tuit}/>
                </div>
            </div>

        </li>
    )

}

export default TuitItem