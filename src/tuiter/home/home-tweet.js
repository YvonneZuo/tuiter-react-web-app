const HomeTweet = ({
    tweet = {
        "id": 1,
        "userName": "SpaceX",
        "icon": "spacex.png",
        "handle": "SpaceX",
        "time": "23h",
        "title": "Dennis and Akiko Tito are the first two crewmembers on Startships' second commercial spaceflight around the Moon ->",
        "image": "dennis.jpeg",
        "link": "spacex.com/updates",
        "comments": "595",
        "retweets": "1,168",
        "likes": "11.1k",
        "isRetweeted": true,
        "retweetedBy": "Elon Musk"
    },
}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {tweet.isRetweeted &&
                        <i className="bi bi-arrow-repeat float-end"></i>}
                    <img className="rounded-circle" width={60} src={`/images/${tweet.icon}`}/>
                </div>
                <div className="col-10">
                    {tweet.isRetweeted &&
                        <div>
                        {tweet.retweetedBy} Retweeted
                    </div>}
                    <span className="fw-bold">{tweet.userName}  </span>
                    <i className="bi bi-check-circle-fill text-primary"></i>
                    <span> @{tweet.handle} . {tweet.time}</span>
                    <i className="bi bi-three-dots float-end"></i>
                    <div>{tweet.title} <span className="text-primary">{tweet.link}</span></div>
                    {tweet.image &&
                        <img className="rounded-3" width={450} src={`/images/${tweet.image}`}/>}
                    {/* <div>
                        {<HomeTweet tweet = {tweet.retweetContent}/>}
                    </div> */}
                    <div className="row mt-2">
                        <div className="col-3">
                            <i className="bi bi-chat"></i>
                            <span className="ms-2">{tweet.comments}</span>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-arrow-repeat"></i>
                            <span className="ms-2">{tweet.retweets}</span>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-heart"></i>
                            <span className="ms-2">{tweet.likes}</span>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-share"></i>
                        </div>
                    </div>

                </div>
            </div>

        </li>
    )

}

export default HomeTweet