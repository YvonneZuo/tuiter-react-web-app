import PostItems from "./PostItems.js"
import PostItem from "./Postitem.js"
const PostList = () => {
    return (`
    <div class="container"">

    ${
        PostItems.map(post => {
        return (PostItem(post))
    }).join(' ')
    }


    </div>
`)
}

const postList = $(`#wd-postList`);
postList.append(PostList());
export default PostList;
$(PostList);