import "./style.css";

export default function Sneaker(theSneaker, key) {
  var sneaker = theSneaker.theSneaker;

  console.log(sneaker);

  var lowestResellPrice = sneaker.lowestResellPrice;
  var brand = sneaker.brand;
  var silhouette = sneaker.silhouette;
  var shoeName = sneaker.shoeName;
  var styleID = sneaker.key;
  var retailPrice = sneaker.retailPrice;
  var thumbnail = sneaker.thumbnail;
  var releaseDate = sneaker.releaseDate;
  var description = sneaker.description;
  var resellLinks = sneaker.resellLinks;

  return (
    <div id={styleID} className="main-sneaker-large-holder">
      <section className="main-sneaker-holder">
        <article className="main-sneaker-top">
          <h1>{shoeName}</h1>
        </article>
        <article className="main-sneaker-bottom">
          <img className="main-sneaker-image" src={thumbnail}></img>
          <nav className="main-sneaker-nav">
            <a href={resellLinks.stockX}>StockX</a>
            <a href={resellLinks.goat}>GOAT</a>
            <a href={resellLinks.flightClub}>FlightClub</a>
          </nav>
        </article>
      </section>
    </div>
  );
}
