import { useContext, useEffect, createContext, useState } from "react";
import Sneaker from "../components/SneakerItem";
import Carousel from "react-elastic-carousel";
import ShoeInfo from "../components/ShoeInfo";
import ShoeContext from "../context/context";

const ShoePage = () => {
  const shoeCtx = useContext(ShoeContext);

  console.log(shoeCtx.test);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const styleID = urlParams.get("styleID");
  const make = urlParams.get("make");

  const [shoeSearch, setShoeSearch] = useState();
  const [relatedSearch, setRelatedSearch] = useState();

  function newShoeSearch(newShoeID) {
    fetch(`http://localhost:3001/api/product/${newShoeID}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setShoeSearch(data);
        console.log(data);
      });
  }

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
          setShoeSearch(data);
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
        <ShoeInfo shoe={shoeSearch} />
        <article id="carousel-holder">
          <Carousel breakPoints={breakPoints} itemsToScroll={1}>
            {relatedSearch.map((item) => {
              return (
                <Sneaker
                  changeState={newShoeSearch}
                  theSneaker={item}
                  key={item.styleID}
                />
              );
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
