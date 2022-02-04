import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingRandomShoe from "../LoadingComponents/RandomShoe";
import "./style.css";

export default function RandomShoe() {
  const [randomShoe, setRandomShoe] = useState([]);
  const [randomLowPrice, setRandomLowPrice] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function returnRandom() {
    var randomArray = [
      "Nike",
      "Jordan",
      "Adidas",
      "Yeezy",
      "New Balance",
      "Converse",
    ];

    const randomSearch =
      randomArray[Math.floor(Math.random() * randomArray.length)];

    try {
      setLoaded(false);
      await fetch(`http://localhost:3001/api/search/${randomSearch}`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          var randomData = data[Math.floor(Math.random() * data.length)];
          setRandomShoe(randomData);
          lowestPrice(
            randomData.lowestResellPrice.stockX,
            randomData.lowestResellPrice.goat,
            randomData.lowestResellPrice.flightClub
          );
        });
    } catch (err) {
      console.log(err);
    }
  }

  function lowestPrice(stockx, goat, flightclub) {
    var priceArray = [stockx, goat, flightclub];
    var lowestPrice = Math.min(...priceArray);

    var arrayIndex = priceArray.indexOf(lowestPrice);

    var companyArray = ["StockX", "GOAT", "FlightClub"];

    var lowPriceArray = [lowestPrice, companyArray[arrayIndex]];

    setRandomLowPrice(lowPriceArray);
    setLoaded(true);
  }

  console.log(randomShoe);

  useEffect(() => {
    returnRandom();
  }, []);

  if (loaded) {
    return (
      <section className="random-sneaker-holder">
        <article className="random-sneaker-left">
          <h3>{randomShoe.shoeName}</h3>
          <article className="random-sneaker-image">
            <img src={randomShoe.thumbnail} loading="lazy"></img>
          </article>
          <h3>Retail Price: ${randomShoe.retailPrice}</h3>
        </article>
        <article className="random-sneaker-right">
          <p className="random-description">{randomShoe.description}</p>

          <h2>Lowest Resell Price: ${randomLowPrice[0]}</h2>
          <h2>{randomLowPrice[1]}</h2>
          <button onClick={returnRandom}>Random Shoe</button>
          <Link
            to={{
              pathname: `/result/${randomShoe.shoeName}?style=${randomShoe.styleID}&make=${randomShoe.silhoutte}`,
            }}
          >
            <button>Shoe Info</button>
          </Link>
        </article>
      </section>
    );
  } else {
    return <LoadingRandomShoe />;
  }
}
