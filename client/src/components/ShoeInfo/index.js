import { useEffect, useState } from "react";
import "./style.css";

export default function ShoeInfo({ shoe }) {
  const [shoeSizeList, setShoeSizeList] = useState([]);

  var shoeSizes;
  var sizeArray = [];

  function setShoeSeller(seller) {
    console.log(seller);
    switch (seller) {
      case "stockX":
        shoeSizes = shoe.resellPrices.stockX;
        setShoeSize();
        break;
      case "goat":
        shoeSizes = shoe.resellPrices.goat;
        setShoeSize();
        break;
      case "flightClub":
        shoeSizes = shoe.resellPrices.flightClub;
        setShoeSize();
        break;
    }
  }

  function setShoeSize() {
    var basicArray = Object.entries(shoeSizes)
      .map(([size, price]) => ({ size, price }))
      .sort((a, b) => a.size - b.size);

    setShoeSizeList(basicArray);
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
            <button
              onClick={() => setShoeSeller("stockX")}
              className="shoeinfo-price"
            >
              <h1>StockX</h1>
              <h2>${shoe.lowestResellPrice.stockX}</h2>
            </button>
            <button
              onClick={() => setShoeSeller("goat")}
              className="shoeinfo-price"
            >
              <h1>GOAT</h1>
              <h2>${shoe.lowestResellPrice.goat}</h2>
            </button>
            <button
              onClick={() => setShoeSeller("flightClub")}
              className="shoeinfo-price"
            >
              <h1>FlightClub</h1>
              <h2>${shoe.lowestResellPrice.flightClub}</h2>
            </button>
          </article>
        </article>
      </section>
      <section className="shoeinfo-bottom-holder">
        <article id="bottom-info-holder">
          <h1>{shoe.colorway}</h1>
        </article>
        <ul id="size-item-holder">
          {shoeSizeList.map((item) => {
            return (
              <li className="size-item">
                <label className="size-text">{item.size}</label>
                <label className="price-text">${item.price}</label>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
