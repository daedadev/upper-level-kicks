import { Link } from "react-router-dom";
import "./style.css";

export default function ResultPageItem({ shoe, shoeFunction }) {
  console.log(shoe);
  return (
    // Held inside of .result-large-item-holder
    <Link
      to={{
        pathname: `/result/${shoe.shoeName}?style=${shoe.styleID}&make=${shoe.silhoutte}`,
      }}
    >
      <div className="result-item-holder">
        <img src={shoe.thumbnail} loading="lazy"></img>
        <h1>{shoe.shoeName}</h1>
      </div>
    </Link>
  );
}
