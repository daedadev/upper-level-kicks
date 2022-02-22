import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./style.css";

export default function Sneaker(theSneaker, changeState) {
  const [onHover, setonHover] = useState(true);

  const { currentUser } = useAuth();

  var sneaker = theSneaker.theSneaker;

  var lowestResellPrice = sneaker.lowestResellPrice;
  var brand = sneaker.brand;
  var silhoutte = sneaker.silhoutte;
  var shoeName = sneaker.shoeName;
  var styleID = sneaker.styleID;
  var retailPrice = sneaker.retailPrice;
  var thumbnail = sneaker.thumbnail;
  var releaseDate = sneaker.releaseDate;
  var description = sneaker.description;
  var resellLinks = sneaker.resellLinks;

  async function saveShoe() {
    const payload = {
      styleID: sneaker.styleID,
      name: sneaker.shoeName,
      brand: sneaker.brand,
      make: sneaker.make,
      image: sneaker.thumbnail,
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
    <div
      key={sneaker.styleID}
      id={styleID}
      className="main-sneaker-large-holder"
    >
      <Link
        key={location.href}
        onClick={changeState}
        to={{
          pathname: `/result/${sneaker.brand}?style=${sneaker.styleID}&make=${sneaker.silhoutte}`,
        }}
      >
        <section className="main-sneaker-holder">
          <article className="main-sneaker-top">
            <h3>{shoeName}</h3>
          </article>
          <article className="main-sneaker-bottom">
            <article className="main-sneaker-image">
              <img src={thumbnail} loading="lazy"></img>
            </article>
          </article>
        </section>
      </Link>
      <button
        className="sneaker-save-button"
        onClick={saveShoe}
        onMouseOver={() => setonHover(false)}
        onMouseOut={() => setonHover(true)}
      >
        {onHover ? "+" : "Save"}
      </button>
    </div>
  );
}
