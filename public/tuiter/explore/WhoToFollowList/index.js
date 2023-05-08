import WhoToFollowListItem from "./WhoToFollowListItem.js"
import whos from "./whos.js"

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
        <li class="list-group-item"><b>Who to follow</b></li>
            ${
                whos.map(who => {
                return (WhoToFollowListItem(who));
                }).join(' ')
            }
   </ul>
    `)
}

export default WhoToFollowList;
const renderWhoToFollow = $('#whoToFollow')
renderWhoToFollow.html(WhoToFollowList());
$(WhoToFollowList);