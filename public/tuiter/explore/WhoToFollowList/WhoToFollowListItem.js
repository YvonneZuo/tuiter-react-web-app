const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
        <div>
            <img class="rounded-circle float-start" width="50px" height="50px" src=${who.avatarIcon} alt="">
            <div class="float-start ms-2">
                <span><b>${who.userName}</b></span>
                <i class="fa fa-check-circle"></i><br>
                <span class="text-dark">@${who.handle}</span>
            </div>
        </div>
        <div>
            <button class="btn btn-primary btn-follow rounded-pill float-end">Follow</button>
        </div>
    </li>
    `)
}

export default WhoToFollowListItem;