import { useEffect, useState } from "react";
import "./style.css";

export default function MostPopular() {
  const [shoe, setShoe] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/api/mostpopular", {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setShoe(data);
        console.log(shoe[0]);
      });
  }, []);

  if (shoe) {
    return (
      <section id="mostpopular-holder">
        <article id="mostpopular-left">
          <img src={shoe[0].thumbnail}></img>
        </article>
        <article id="mostpopular-right">
          <h1>{shoe[0].shoeName}</h1>
          <p>{shoe[0].description}</p>
          <article id="mostpopular-price-holder">
            <div className="mostpopular-price">
              <h1>StockX</h1>
              <h2>${shoe[0].lowestResellPrice.stockX}</h2>
            </div>
            <div className="mostpopular-price">
              <h1>GOAT</h1>
              <h2>${shoe[0].lowestResellPrice.goat}</h2>
            </div>
            <div className="mostpopular-price">
              <h1>FlightClub</h1>
              <h2>${shoe[0].lowestResellPrice.flightClub}</h2>
            </div>
          </article>
        </article>
      </section>
    );
  } else {
    return <section></section>;
  }
}
