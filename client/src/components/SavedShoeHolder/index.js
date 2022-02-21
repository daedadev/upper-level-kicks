import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./style.css";

export default function SavedShoe({ saved, deleteShoe }) {
  console.log(saved);
  return (
    <div className="small-saved-shoe-holder">
      <Link
        key={location.href}
        to={{
          pathname: `/result/${saved.brand}?style=${saved.styleID}&make=${saved.make}`,
        }}
      >
        <div className="saved-top-holder">
          <img src={saved.image}></img>
          <h1>{saved.name}</h1>
        </div>
      </Link>

      <div className="saved-bottom-holder">
        <h1>
          {saved.brand}/{saved.make}
        </h1>
      </div>
      <button
        onClick={() => deleteShoe(saved.styleID)}
        className="delete-saved-button"
      >
        X
      </button>
    </div>
  );
}
