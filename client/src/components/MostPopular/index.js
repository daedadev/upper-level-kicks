import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function MostPopular({ shoe }) {
  if (shoe) {
    return (
      <Link
        className="mostpopular-holder-a"
        to={{
          pathname: `/result/${shoe.shoeName}?style=${shoe.styleID}&make=${shoe.silhoutte}`,
        }}
      >
        <section className="mostpopular-holder">
          <article className="mostpopular-left">
            <img src={shoe.thumbnail} loading="lazy"></img>
          </article>
          <article className="mostpopular-right">
            <h1>{shoe.shoeName}</h1>
            <p>{shoe.description}</p>
            <article className="mostpopular-price-holder">
              <div className="mostpopular-price">
                <h1>StockX</h1>
                <h2>${shoe.lowestResellPrice.stockX}</h2>
              </div>
              <div className="mostpopular-price">
                <h1>GOAT</h1>
                <h2>${shoe.lowestResellPrice.goat}</h2>
              </div>
              <div className="mostpopular-price">
                <h1>FlightClub</h1>
                <h2>${shoe.lowestResellPrice.flightClub}</h2>
              </div>
            </article>
          </article>
        </section>
      </Link>
    );
  } else {
    return <section></section>;
  }
}
