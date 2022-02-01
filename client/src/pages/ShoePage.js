import { useContext, useEffect, createContext, useState } from "react";
import Sneaker from "../components/SneakerItem";
import Carousel from "react-elastic-carousel";
import ShoeInfo from "../components/ShoeInfo";
import ShoeContext from "../context/context";

const ShoePage = () => {
  const shoeCtx = useContext(ShoeContext);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const styleID = urlParams.get("styleID");
  const make = urlParams.get("make");

  async function getShoeInfo() {
    try {
      await fetch(`http://localhost:3001/api/product/${styleID}`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          shoeCtx.setShoeContext(data);
          console.log(data);
        });
      await fetch(`http://localhost:3001/api/search/${make}`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((info) => info.json())
        .then((info) => {
          shoeCtx.setRelatedShoeContext(info);
          console.log(info);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getShoeInfo();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  if (shoeCtx.relatedShoeContext) {
    return (
      <section className="main-holder">
        <ShoeInfo shoe={shoeCtx.shoeContext} />
        <article id="carousel-holder">
          <Carousel breakPoints={breakPoints} itemsToScroll={1}>
            {shoeCtx.relatedShoeContext.map((item) => {
              return <Sneaker theSneaker={item} key={item.styleID} />;
            })}
          </Carousel>
        </article>
      </section>
    );
  } else {
    return (
      <section className="main-holder">
        <article id="carousel-holder">
          <div></div>
        </article>
      </section>
    );
  }
};

export default ShoePage;
