import { useEffect, useState } from "react";
import Sneaker from "../components/MainSneaker";
import MostPopular from "../components/MostPopular";
import Carousel from "react-elastic-carousel";

const MainPage = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/test/products", {
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

  return (
    <section className="main-holder">
      <MostPopular />
      <article id="carousel-holder">
        <Carousel>
          {sneakers.map((item) => {
            return (
              <li>
                <Sneaker theSneaker={item} />;
              </li>
            );
          })}
        </Carousel>
      </article>
    </section>
  );
};

export default MainPage;
