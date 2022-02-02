import { useEffect, useState } from "react";
import Sneaker from "../components/SneakerItem";
import MostPopular from "../components/MostPopular";
import Carousel from "react-elastic-carousel";
import RandomShoe from "../components/RandomShoe";

const MainPage = () => {
  const [sneakers, setSneakers] = useState([]);

  async function getPopular() {
    try {
      await fetch("http://localhost:3001/api/popular", {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setSneakers(data);
        });
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

  return (
    <section className="main-holder">
      <MostPopular shoe={sneakers[0]} />
      <article id="carousel-holder">
        <Carousel breakPoints={breakPoints} itemsToScroll={1}>
          {arrayLoop.map((item) => {
            return <Sneaker theSneaker={item} />;
          })}
        </Carousel>
        <RandomShoe />
      </article>
    </section>
  );
};

export default MainPage;
