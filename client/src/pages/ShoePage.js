import { useContext, useEffect, useState } from "react";
import Sneaker from "../components/SneakerItem";
import Carousel from "react-elastic-carousel";
import ShoeInfo from "../components/ShoeInfo";

const ShoePage = () => {
  const queryString = window.location.search;
  const mainString = window.location.href.split("?")[0];
  const urlParams = new URLSearchParams(queryString);
  const lastItem = mainString.substring(mainString.lastIndexOf("/") + 1);
  const styleID = lastItem;
  const make = urlParams.get("make");

  const [shoeInfo, setShoeInfo] = useState();
  const [relatedSearch, setRelatedSearch] = useState();

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
          setShoeInfo(data);
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
          setRelatedSearch(info);
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

  if (relatedSearch) {
    return (
      <section className="main-holder">
        <ShoeInfo shoe={shoeInfo} />
        <article id="carousel-holder">
          <Carousel breakPoints={breakPoints} itemsToScroll={1}>
            {relatedSearch.map((item) => {
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
