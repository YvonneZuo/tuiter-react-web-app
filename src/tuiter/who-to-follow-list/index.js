import WhoToFollowListItem from './who-to-follow-list-item';
import whos from './who.json';

const WhoToFollowList = () => {
    return (
        <ul className='list-group'>
            <li className='list-group-item'>
                <h3>Who to follow</h3></li>
            {whos.map(who => {
               return(<WhoToFollowListItem key={who._id} who={who}/>)
            })}
        </ul>
    )
}

export default WhoToFollowList;