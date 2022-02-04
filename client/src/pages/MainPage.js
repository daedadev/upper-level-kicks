import { useEffect, useState } from "react";
import Sneaker from "../components/SneakerItem";
import MostPopular from "../components/MostPopular";
import Carousel from "react-elastic-carousel";
import RandomShoe from "../components/RandomShoe";
import LoadingSneaker from "../components/LoadingComponents/SneakerItem";
import LoadingPopularSneaker from "../components/LoadingComponents/PopularSneaker";
import ShoeInfo from "../components/ShoeInfo";

const MainPage = () => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMain, setIsLoadingMain] = useState();

  async function getPopular() {
    try {
      await fetch("/api/popular", {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setSneakers(data);
        });
      setIsLoadingMain(true);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPopular();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  var arrayLoop = [];

  for (var i = 1; i < sneakers.length; i++) {
    arrayLoop.push(sneakers[i]);
  }

  var loadArray = [1, 2, 3, 4, 5];
  const loadingShoe = loadArray.map((item) => {
    return <LoadingSneaker />;
  });

  const loadedShoe = arrayLoop.map((item) => {
    return <Sneaker theSneaker={item} />;
  });

  return (
    <section className="main-holder">
      {isLoadingMain ? (
        <MostPopular shoe={sneakers[0]} />
      ) : (
        <LoadingPopularSneaker />
      )}

      <article id="carousel-holder">
        <Carousel breakPoints={breakPoints} itemsToScroll={1}>
          {isLoading ? loadedShoe : loadingShoe}
        </Carousel>
        <RandomShoe />
      </article>
    </section>
  );
};

export default MainPage;
