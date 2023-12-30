import { Stack, Divider } from "@mui/material";
import { TweetField } from "./components/TweetField.jsx";
import { TwitterLogo } from "./components/TwitterLogo.jsx";
import { TweetCard } from "./components/TweetCard.jsx";
import { useState } from "react";
import './mainstyle.css';

const useTweetsList = (initItems) => {
    const [Tweets, SetTweets] = useState(initItems);

    //Tweetをリストに追加する関数
    const addTweet = (item) => {
      SetTweets([item, ...Tweets]);
    };

    return [Tweets, addTweet];
  };

const Home = () => {
    const [Tweets, addTweet] = useTweetsList([
        { user: 'Simeji', userId: '@Simeji1993', tweet: '初期のテストツイート' },
      ]);
    return (
        <div id={'main-frame'}>
          <Stack divider={<Divider />}>
            <TwitterLogo />
            <TweetField inputFunc={addTweet} />
            {Tweets.map((e, i) => (
              <TweetCard key={i} {...e} />
            ))}
          </Stack>
        </div>
      );
}

export default Home
