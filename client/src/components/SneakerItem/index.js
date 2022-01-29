import { Link } from "react-router-dom";
import "./style.css";

export default function Sneaker(theSneaker, key) {
  var sneaker = theSneaker.theSneaker;

  var lowestResellPrice = sneaker.lowestResellPrice;
  var brand = sneaker.brand;
  var silhouette = sneaker.silhouette;
  var shoeName = sneaker.shoeName;
  var styleID = sneaker.styleID;
  var retailPrice = sneaker.retailPrice;
  var thumbnail = sneaker.thumbnail;
  var releaseDate = sneaker.releaseDate;
  var description = sneaker.description;
  var resellLinks = sneaker.resellLinks;

  return (
    <div id={styleID} className="main-sneaker-large-holder">
      <Link
        to={{
          pathname: `/result/?styleID=${sneaker.styleID}`,
          state: {
            styleID: sneaker.styleID,
            itemSilhouette: sneaker.silhouette,
          },
        }}
      >
        <section className="main-sneaker-holder">
          <article className="main-sneaker-top">
            <h3>{shoeName}</h3>
          </article>
          <article className="main-sneaker-bottom">
            <article className="main-sneaker-image">
              <img src={thumbnail}></img>
            </article>
            <nav className="main-sneaker-nav">
              <a href={resellLinks.stockX}>StockX</a>
              <a href={resellLinks.goat}>GOAT</a>
              <a href={resellLinks.flightClub}>FlightClub</a>
            </nav>
          </article>
        </section>
      </Link>
    </div>
  );
}
