import HomeTweet from "./home-tweet";
import tweets from "./tweets.json";

const HomeComponent = () => {
    return (
        <div className="list-group">
            {tweets.map(tweet =>
                <HomeTweet key={tweet.id} tweet={tweet}/>
            )}
        </div>

    )
}

export default HomeComponent;