import { useEffect, useState } from "react";
import Sneaker from "../components/SneakerItem";
import MostPopular from "../components/MostPopular";
import Carousel from "react-elastic-carousel";
import RandomShoe from "../components/RandomShoe";

const MainPage = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/popular", {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setSneakers(data);
      });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <section className="main-holder">
      <MostPopular shoe={sneakers[0]} />
      <article id="carousel-holder">
        <Carousel breakPoints={breakPoints} itemsToScroll={5}>
          {sneakers.map((item) => {
            return <Sneaker theSneaker={item} />;
          })}
        </Carousel>
        <RandomShoe />
      </article>
    </section>
  );
};

export default MainPage;
