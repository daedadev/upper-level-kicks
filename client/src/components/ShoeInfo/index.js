import { useEffect, useState } from "react";
import "./style.css";

export default function ShoeInfo({ shoe }) {
  const [shoeSizeList, setShoeSizeList] = useState([]);

  var shoeSizes;
  var sizeArray = [];

  function setShoeSeller(seller) {
    switch (seller) {
      case "stockX":
        shoeSizes = shoe.resellPrices.stockX;

        break;
      case "goat":
        shoeSizes = shoe.resellPrices.goat;

        break;
      case "flightClub":
        shoeSizes = shoe.resellPrices.flightClub;

        break;
    }
  }

  function setShoeSize() {
    for (const [key, value] of Object.entries(shoeSizes)) {
      sizeArray.push({
        size: key,
        price: value,
      });
    }
    setShoeSizeList(sizeArray);
    console.log(shoeSizeList);
  }

  useEffect(() => {
    setShoeSeller("stockX");
    setShoeSize();
  }, []);

  return (
    <section className="shoeinfo-holder">
      <section className="shoeinfo-top-holder">
        <article className="shoeinfo-left">
          <img src={shoe.thumbnail}></img>
        </article>
        <article className="shoeinfo-right">
          <h1>{shoe.shoeName}</h1>
          <p>{shoe.description}</p>
          <article className="shoeinfo-price-holder">
            <button className="shoeinfo-price">
              <h1>StockX</h1>
              <h2>${shoe.lowestResellPrice.stockX}</h2>
            </button>
            <button className="shoeinfo-price">
              <h1>GOAT</h1>
              <h2>${shoe.lowestResellPrice.goat}</h2>
            </button>
            <button className="shoeinfo-price">
              <h1>FlightClub</h1>
              <h2>${shoe.lowestResellPrice.flightClub}</h2>
            </button>
          </article>
        </article>
      </section>
      <section className="shoeinfo-size-holder">
        <ul>
          {shoeSizeList.map((item) => {
            return (
              <li>
                <h1>Size {item.size}</h1>
                <h1>{item.price}</h1>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
