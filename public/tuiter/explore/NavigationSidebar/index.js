const NavigationSidebar = () => {
   return (` <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i>
        </a>
        <a class="list-group-item" href="/">
            <i class="fa fa-home"></i>
            <span class="d-none d-xl-block">Home</span>
        </a>
        <a class="list-group-item" href="/">
            <i class="fa fa-hashtag"></i>
            <span class="d-none d-xl-block">Explore</span>
        </a>
        <a class="list-group-item" href="/">
            <i class="fa fa-bell"></i>
            <span class="d-none d-xl-block">Notifications</span>
        </a>
        <a class="list-group-item" href="/">
            <i class="fa fa-envelope"></i>
            <span class="d-none d-xl-block">Messages</span>
        </a>
        <a class="list-group-item" href="/">
            <i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-block">Bookmarks</span>
        </a>
        <a class="list-group-list" href="/">
            <i class="fa fa-home"></i>
            <span class="d-none d-xl-block">Lists</span>
        </a>
        <a class="list-group-item" href="/">
            <i class="fa fa-user"></i>
            <span class="d-none d-xl-block">Profile</span>
        </a>
        <a class="list-group-item" href="/">
            <i class="fa fa-circle"></i>
            <span class="d-none d-xl-block">More</span>
        </a>
        <a href="tweet.html" class="btn btn-primary rounded-pill"></a>

    </div>
    `);
}

export default NavigationSidebar;