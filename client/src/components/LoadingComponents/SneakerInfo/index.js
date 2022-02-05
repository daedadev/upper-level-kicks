export default function LoadingShoeInfo() {
  var images = ["/DunkPlaceHolder.PNG", "/JordanPlaceHolder.PNG"];
  var image = images[Math.floor(Math.random() * images.length)];
  return (
    <section className="shoeinfo-holder">
      <section className="shoeinfo-top-holder">
        <article className="shoeinfo-left">
          <img className="loading-image" src={image} loading="lazy"></img>
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
