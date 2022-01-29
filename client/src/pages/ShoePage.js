import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Sneaker from "../components/SneakerItem";
import MostPopular from "../components/MostPopular";
import Carousel from "react-elastic-carousel";
import ShoeInfo from "../components/ShoeInfo";

const ShoePage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const styleID = urlParams.get("styleID");

  const [shoeSearch, setShoeSearch] = useState();
  const [relatedSearch, setRelatedSearch] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/api/product/${styleID}`, {
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
    // fetch(`http://localhost:3001/api/search/${itemSilhouette}`, {
    //   method: `GET`,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setRelatedSearch(data);
    //   });
  }, []);

  return (
    <section className="main-holder">
      <ShoeInfo shoe={shoeSearch} />
      <article id="carousel-holder">
        {/* <Carousel breakPoints={breakPoints} itemsToScroll={1}>
          {arrayLoop.map((item) => {
            return <Sneaker theSneaker={item} />;
          })}
        </Carousel> */}
      </article>
    </section>
  );
};

export default ShoePage;
