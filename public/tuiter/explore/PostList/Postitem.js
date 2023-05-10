const PostItem = (post) => {
    return (`
    <div class="row mt-2">
        <div class="col-1">
            <img width="50px" height="50px" class="rounded-circle" src=${post.icon} alt="">
        </div>
        <div class="col-11">
            <div class="up-content">
                <div>
                    <span><b>${post.userName}</b></span>
                    <i class="fa fa-check-circle"></i>
                    <span class="text-dark">${post.handle}</span>
                    <span>  ${post.time}</span>
                    <i class="fa fa-ellipsis-h float-end"></i>
                    <p>${post.title}</p>
                </div>
            </div>
            ${post.cardText != null? `
            <div class="card">
                <img class="card-img-top" src=${post.image} alt="">
                <div class="card-body">
                    <p class="card-text">${post.cardText}</p>
                </div>
                </div>
                ` : `<img width=100% src=${post.image}></img>`}


            </div>
        </div>
    </div>
    `)
}

export default PostItem;