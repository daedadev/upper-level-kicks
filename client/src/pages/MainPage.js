import { useEffect, useState } from "react";
import Sneaker from "../components/MainSneaker";

const MainPage = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/sneaker", {
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
    <div>
      <ul>
        {sneakers.map((item) => {
          return <Sneaker theSneaker={item} key={item.styleID} />;
        })}
      </ul>
    </div>
  );
};

export default MainPage;
