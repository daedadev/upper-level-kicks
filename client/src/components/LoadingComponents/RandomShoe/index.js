export default function LoadingRandomShoe() {
  var images = ["/DunkPlaceHolder.PNG", "/JordanPlaceHolder.PNG"];
  var image = images[Math.floor(Math.random() * images.length)];
  return (
    <section className="random-sneaker-holder">
      <article className="random-sneaker-left">
        <h3>Loading Name</h3>
        <article className="random-sneaker-image">
          <img className="loading-image" src={image} loading="lazy"></img>
        </article>
        <h3>Retail Price: Loading Price</h3>
      </article>
      <article className="random-sneaker-right">
        <p>Loading Description</p>

        <h2>Loading Price</h2>
        <h2>Loading Company</h2>
        <button>Random Shoe</button>
        <button>Shoe Info</button>
      </article>
    </section>
  );
}
