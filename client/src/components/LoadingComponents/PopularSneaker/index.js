export default function LoadingPopularSneaker() {
  const stockImage =
    "https://stockx-assets.imgix.net/media/Product-Placeholder-Default-20210415.jpg?fit=fill&bg=FFFFFF&auto=compress&q=90&dpr=1&trim=color&w=480&h=320&fm=avif";

  return (
    <section id="mostpopular-holder">
      <article id="mostpopular-left">
        <img src={stockImage} loading="lazy"></img>
      </article>
      <article id="mostpopular-right">
        <h1>Loading Name</h1>
        <p>Loading Description</p>
        <article id="mostpopular-price-holder">
          <div className="mostpopular-price">
            <h1>StockX</h1>
            <h2>Loading</h2>
          </div>
          <div className="mostpopular-price">
            <h1>GOAT</h1>
            <h2>Loading</h2>
          </div>
          <div className="mostpopular-price">
            <h1>FlightClub</h1>
            <h2>Loading</h2>
          </div>
        </article>
      </article>
    </section>
  );
}
