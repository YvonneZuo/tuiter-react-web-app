const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
          }

    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName}.{post.time}</div>
                    <div className="fw-bold">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img className="rounded-3 float-end" width={70} src={`/images/${post.image}`}></img>
                </div>
            </div>
        </li>
    )
}

export default PostSummaryItem;