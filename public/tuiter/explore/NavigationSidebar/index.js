const NavigationSidebar = () => {
   return (`
   <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="home.html" class="list-group-item d-flex align-items-center">
        <i class="fa fa-home"></i>
        <span class="d-none d-xl-block ms-2">Home</span>
        </a>
        <a href="explore.html" class="list-group-item active d-flex align-items-center">
            <i class="fa fa-hashtag"></i>
            <span class="d-none d-xl-block ms-2">Explore</span>
        </a>
        <a href="notifcation.html" class="list-group-item d-flex align-items-center">
            <i class="fa fa-bell"></i>
            <span class="d-none d-xl-block ms-2">Notifications</span>
        </a>
        <a href="message.html" class="list-group-item d-flex align-items-center">
            <i class="fa fa-envelope"></i>
            <span class="d-none d-xl-block ms-2">Messages</span>
        </a>
        <a href="bookmart.html" class="list-group-item d-flex align-items-center">
            <i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-block ms-2">Bookmarks</span>
        </a>
        <a href="list.html" class="list-group-item d-flex align-items-center">
            <i class="fa fa-list"></i>
            <span class="d-none d-xl-block ms-2">Lists</span>
        </a>
        <a href="profile.html" class="list-group-item d-flex align-items-center">
            <i class="fa fa-user"></i>
            <span class="d-none d-xl-block ms-2">Profile</span>
        </a>
        <a href="more.html" class="list-group-item d-flex align-items-center">
            <i class="fa fa-circle"></i>
            <span class="d-none d-xl-block ms-2">More</span>
        </a>
    </div>
        <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
        Tweet</a>

         </div>
    `);
}

// const sideBar = $('#sideBar');
// sideBar.html(`${NavigationSidebar()}`);

export default NavigationSidebar;