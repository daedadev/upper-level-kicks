import { useEffect, useState } from "react";
import LoadingRandomShoe from "../LoadingComponents/RandomShoe";
import LoadingTwitter from "../LoadingComponents/TwitterLoading";
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

  if (loaded) {
    return (
      <section className="twitter-main-holder">
        <h1 className="twitter-header">Twitter News</h1>
        <div className="twitter-holder">
          {twitterData.map((tweet) => {
            return (
              <div key={tweet.id} className="tweet-holder">
                <div className="tweet-profile">
                  <h1>{tweet.user.screen_name}</h1>
                  <img src={tweet.user.profile_image_url}></img>
                </div>
                <div className="tweet-content">
                  <p>{tweet.text}</p>
                  {tweet.extended_entities &&
                    tweet.extended_entities.media.map((image) => {
                      return (
                        <img
                          className="tweet-images"
                          src={image.media_url}
                        ></img>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return <LoadingTwitter />;
  }
}
