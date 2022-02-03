import { Link } from "react-router-dom";
import "./style.css";

export default function ResultPageItem({ shoe, shoeFunction }) {
  console.log(shoe);
  return (
    // Held inside of .result-large-item-holder
    <Link
      to={{
        pathname: `/result/${shoe.styleID}?make=${shoe.silhoutte}`,
      }}
      onClick={() => shoeFunction(shoe.styleID, shoe.make)}
    >
      <div className="result-item-holder">
        <img src={shoe.thumbnail}></img>
        <h1>{shoe.shoeName}</h1>
      </div>
    </Link>
  );
}
