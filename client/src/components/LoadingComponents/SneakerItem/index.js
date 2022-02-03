import "./style.css";

export default function LoadingSneaker() {
  const stockImage =
    "https://stockx-assets.imgix.net/media/Product-Placeholder-Default-20210415.jpg?fit=fill&bg=FFFFFF&auto=compress&q=90&dpr=1&trim=color&w=480&h=320&fm=avif";

  return (
    <div className="main-sneaker-large-holder">
      <a>
        <section className="main-sneaker-holder">
          <article className="main-sneaker-top">
            <h3>Loading</h3>
          </article>
          <article className="main-sneaker-bottom">
            <article className="main-sneaker-image">
              <img src={stockImage} loading="lazy"></img>
            </article>
          </article>
        </section>
      </a>
    </div>
  );
}
