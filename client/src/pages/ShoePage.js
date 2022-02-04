import { useContext, useEffect, useState } from "react";
import Sneaker from "../components/SneakerItem";
import Carousel from "react-elastic-carousel";
import ShoeInfo from "../components/ShoeInfo";
import LoadingSneaker from "../components/LoadingComponents/SneakerItem";
import LoadingShoeInfo from "../components/LoadingComponents/SneakerInfo";

const ShoePage = () => {
  const queryString = window.location.search;
  const mainString = window.location.href.split("?")[0];
  const urlParams = new URLSearchParams(queryString);
  let style = urlParams.get("style");
  const make = urlParams.get("make");

  const [shoeInfo, setShoeInfo] = useState();
  const [relatedSearch, setRelatedSearch] = useState();
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);
  const [isLoadingMain, setIsLoadingMain] = useState(false);

  async function getShoeInfo() {
    try {
      if (style.includes("/")) {
        var newStyle = style.replace("/", "+");
        style = newStyle;
      }

      await fetch(`http://localhost:3001/api/product/${style}`, {
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
      setIsLoadingMain(true);

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
      setIsLoadingRelated(true);
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

  var loadArray = [1, 2, 3, 4, 5];
  const loadingShoe = loadArray.map((item) => {
    return <LoadingSneaker />;
  });

  var loadedShoe;

  if (relatedSearch) {
    loadedShoe = relatedSearch.map((item) => {
      return <Sneaker theSneaker={item} key={item.styleID} />;
    });
  }

  return (
    <section className="main-holder">
      {isLoadingMain ? <ShoeInfo shoe={shoeInfo} /> : <LoadingShoeInfo />}
      <article id="carousel-holder">
        <Carousel breakPoints={breakPoints} itemsToScroll={1}>
          {isLoadingRelated ? loadedShoe : loadingShoe}
        </Carousel>
      </article>
    </section>
  );
};

export default ShoePage;
