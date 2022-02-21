export default function LoadingTwitter() {
  var images = ["/DunkPlaceHolder.PNG", "/JordanPlaceHolder.PNG"];
  var image = images[Math.floor(Math.random() * images.length)];

  const twitterArray = [
    {
      image: image,
      index: 0,
    },
    {
      image: image,
      index: 1,
    },
    {
      image: image,
      index: 2,
    },
    {
      image: image,
      index: 3,
    },
    {
      image: image,
      index: 4,
    },
    {
      image: image,
      index: 5,
    },
    {
      image: image,
      index: 6,
    },
  ];

  return (
    <section className="twitter-main-holder">
      <h1 className="twitter-header">Twitter News</h1>
      <div className="twitter-holder">
        {twitterArray.map((tweet) => {
          return (
            <div key={tweet.index} className="tweet-holder">
              <div className="tweet-profile">
                <h1>User Name</h1>
                <img src={tweet.image}></img>
              </div>
              <div className="tweet-content">
                <p>Twitter description text</p>
                <img className="tweet-images" src={tweet.image}></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
