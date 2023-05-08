const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item d-flex justify-content-between">
        <div>
            <span class="text-dark">${post.topic}</span><br>
            <span><b>${post.userName}</b></span>
            <i class="fa fa-check-circle"></i>
            <span class="text-dark">- ${post.time}</span><br>
            <p><b>${post.title}</b></p>

        </div>
        <div>
            <img width="100px" height="100px" src=${post.image}>

        </div>
    </li>

    `)
}

export default PostSummaryItem;