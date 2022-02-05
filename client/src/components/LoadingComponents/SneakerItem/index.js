import "./style.css";

export default function LoadingSneaker() {
  return (
    <div className="main-sneaker-large-holder">
      <a>
        <section className="main-sneaker-holder">
          <article className="main-sneaker-top">
            <h3>Loading</h3>
          </article>
          <article className="main-sneaker-bottom">
            <article className="main-sneaker-image">
              <img src="/PlaceHolderImage.PNG" loading="lazy"></img>
            </article>
          </article>
        </section>
      </a>
    </div>
  );
}
