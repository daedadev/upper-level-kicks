import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import "./style.css";

export default function ShoeInfo({ shoe }) {
  console.log(shoe);
  const [shoeSizeList, setShoeSizeList] = useState([]);
  const { currentUser } = useAuth();

  var shoeSizes;

  useEffect(() => {
    getSizesLoaded();
  }, []);

  async function getSizesLoaded() {
    try {
      setShoeSeller("stockx");
      setShoeSize();
    } catch (err) {
      console.log(err);
    }
  }

  function setShoeSeller(seller) {
    console.log(seller);
    switch (seller) {
      case "stockX":
        if (shoe.resellPrices.stockX) {
          console.log("bruh");
          shoeSizes = shoe.resellPrices.stockX;
          setShoeSize();
        } else {
          console.log("meh");
          shoeSizes = {
            "No Prices Available": "N/A",
          };
          setShoeSize();
        }

        break;
      case "goat":
        if (shoe.resellPrices.goat) {
          shoeSizes = shoe.resellPrices.goat;
          setShoeSize();
        } else {
          shoeSizes = {
            "No Prices Available": "0",
          };
          setShoeSize();
        }
        break;
      case "flightClub":
        if (shoe.resellPrices.flightClub) {
          shoeSizes = shoe.resellPrices.flightClub;
          setShoeSize();
        } else {
          shoeSizes = {
            "No Prices Available": "0",
          };
          setShoeSize();
        }
        break;
    }
  }

  function setShoeSize() {
    var basicArray = Object.entries(shoeSizes)
      .map(([size, price]) => ({ size, price }))
      .sort((a, b) => a.size - b.size);

    setShoeSizeList(basicArray);
  }

  async function saveShoe() {
    const payload = {
      styleID: shoe.styleID,
      name: shoe.shoeName,
      brand: shoe.brand,
      make: shoe.make,
      image: shoe.thumbnail,
      user_id: currentUser.uid,
    };

    try {
      await fetch("http://localhost:3001/api/shoe", {
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((response) => {
        if (response.status === 200) {
          window.alert("Shoe Saved Successfully");
        }
      });
    } catch (err) {
      window.alert("There was a problem saving your shoe");
      console.log(err);
    }
  }

  return (
    <section className="shoeinfo-holder">
      <section className="shoeinfo-top-holder">
        <article className="shoeinfo-left">
          <img src={shoe.thumbnail} loading="lazy"></img>
          <article className="bottom-info-holder">
            <h1>{shoe.colorway}</h1>
            {currentUser ? <button onClick={saveShoe}>Save Shoe</button> : {}}
          </article>
        </article>
      </section>
      <section className="shoeinfo-bottom-holder">
        <article className="shoeinfo-right">
          <h1 className="shoeinfo-right-h1">{shoe.shoeName}</h1>
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
        <ul className="size-item-holder">
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
