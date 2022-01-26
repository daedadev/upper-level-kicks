import { useEffect, useState } from "react";
import "./style.css";

export default function MostPopular({ shoe }) {
  if (shoe) {
    return (
      <section id="mostpopular-holder">
        <article id="mostpopular-left">
          <img src={shoe.thumbnail}></img>
        </article>
        <article id="mostpopular-right">
          <h1>{shoe.shoeName}</h1>
          <p>{shoe.description}</p>
          <article id="mostpopular-price-holder">
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
    );
  } else {
    return <section></section>;
  }
}
