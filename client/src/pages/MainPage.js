import { useEffect, useState } from "react";
import Sneaker from "../components/MainSneaker";
import MostPopular from "../components/MostPopular";

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
      <ul>
        {sneakers.map((item) => {
          return <Sneaker theSneaker={item} />;
        })}
      </ul>
    </section>
  );
};

export default MainPage;
