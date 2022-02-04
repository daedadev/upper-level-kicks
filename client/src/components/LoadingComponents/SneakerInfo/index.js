export default function LoadingShoeInfo() {
  const stockImage =
    "https://stockx-assets.imgix.net/media/Product-Placeholder-Default-20210415.jpg?fit=fill&bg=FFFFFF&auto=compress&q=90&dpr=1&trim=color&w=480&h=320&fm=avif";

  return (
    <section className="shoeinfo-holder">
      <section className="shoeinfo-top-holder">
        <article className="shoeinfo-left">
          <img src={stockImage} loading="lazy"></img>
          <article id="bottom-info-holder">
            <h1>colorway</h1>
          </article>
        </article>
      </section>
      <section className="shoeinfo-bottom-holder">
        <article className="shoeinfo-right">
          <h1 id="shoeinfo-right-h1">shoe name</h1>
          <p>description</p>
          <article className="shoeinfo-price-holder">
            <button className="shoeinfo-price">
              <h1>company</h1>
              <h2>price</h2>
            </button>
            <button className="shoeinfo-price">
              <h1>company</h1>
              <h2>price</h2>
            </button>
            <button className="shoeinfo-price">
              <h1>company</h1>
              <h2>price</h2>
            </button>
          </article>
        </article>
      </section>
    </section>
  );
}
