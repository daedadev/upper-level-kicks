export default function LoadingShoeInfo() {
  const stockImage =
    "https://stockx-assets.imgix.net/media/Product-Placeholder-Default-20210415.jpg?fit=fill&bg=FFFFFF&auto=compress&q=90&dpr=1&trim=color&w=480&h=320&fm=avif";

  return (
    <section className="shoeinfo-holder">
      <section className="shoeinfo-top-holder">
        <article className="shoeinfo-left">
          <img src={stockImage} loading="lazy"></img>
        </article>
        <article className="shoeinfo-right">
          <h1>Shoe Name</h1>
          <p>Shoe Description</p>
          <article className="shoeinfo-price-holder">
            <button className="shoeinfo-price">
              <h1>StockX</h1>
              <h2>Price</h2>
            </button>
            <button className="shoeinfo-price">
              <h1>GOAT</h1>
              <h2>Price</h2>
            </button>
            <button className="shoeinfo-price">
              <h1>FlightClub</h1>
              <h2>Price</h2>
            </button>
          </article>
        </article>
      </section>
      <section className="shoeinfo-bottom-holder">
        <article id="bottom-info-holder">
          <h1>Colorway</h1>
        </article>
      </section>
    </section>
  );
}
