import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

function HomeScreenComponent() {
    $('#wd-homeScreen').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-3">
        ${NavigationSidebar('home')}
        </div>
        <div class="col-10 col-md-9 col-lg-9 col-xl-9">
        ${PostList()}
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
         ${PostSummaryList()}
        </div>
       </div>
    `);
}

$(HomeScreenComponent);