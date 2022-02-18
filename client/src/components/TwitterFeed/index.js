import { useEffect, useState } from "react";
import LoadingRandomShoe from "../LoadingComponents/RandomShoe";
import "./style.css";

export default function TwitterFeed() {
  const [twitterData, setTwitterData] = useState([]);
  const [loaded, setLoaded] = useState();

  async function getTweets() {
    try {
      setLoaded(false);
      await fetch(`http://localhost:3001/tweets/news`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setTwitterData(data);
          console.log(data);
          setLoaded(true);
        });
    } catch (err) {
      console.log(err);
      return;
    }
  }

  useEffect(() => {
    getTweets();
  }, []);
  <div></div>;
  if (loaded) {
    return (
      <section className="twitter-main-holder">
        <h1 className="twitter-header">Twitter News</h1>
        <div className="twitter-holder">
          {twitterData.statuses.map((tweet) => {
            return (
              <div key={tweet.id} className="tweet-holder">
                <div className="tweet-profile">
                  <h1>{tweet.user.screen_name}</h1>
                  <img src={tweet.user.profile_image_url}></img>
                </div>
                <div className="tweet-content">
                  <p>{tweet.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return <LoadingRandomShoe />;
  }
}
