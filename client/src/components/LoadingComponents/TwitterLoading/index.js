export default function LoadingTwitter() {
  var images = ["/DunkPlaceHolder.PNG", "/JordanPlaceHolder.PNG"];
  var image = images[Math.floor(Math.random() * images.length)];

  const twitterArray = [
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
  ];

  return (
    <section className="twitter-main-holder">
      <h1 className="twitter-header">Twitter News</h1>
      <div className="twitter-holder">
        {twitterArray.map((tweet) => {
          return (
            <div key={twitterArray.indexOf(tweet)} className="tweet-holder">
              <div className="tweet-profile">
                <h1>User Name</h1>
                <img src={tweet}></img>
              </div>
              <div className="tweet-content">
                <p>Twitter description text</p>
                <img className="tweet-images" src={tweet}></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
