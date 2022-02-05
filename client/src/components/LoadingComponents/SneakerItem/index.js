export default function LoadingSneaker() {
  var images = ["/DunkPlaceHolder.PNG", "/JordanPlaceHolder.PNG"];
  var image = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="main-sneaker-large-holder">
      <a>
        <section className="main-sneaker-holder">
          <article className="main-sneaker-top">
            <h3>Loading</h3>
          </article>
          <article className="main-sneaker-bottom">
            <article className="main-sneaker-image">
              <img className="loading-image" src={image} loading="lazy"></img>
            </article>
          </article>
        </section>
      </a>
    </div>
  );
}
