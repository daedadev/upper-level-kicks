import { useContext, useEffect, useState } from "react";
import ResultPageItem from "../components/ResultPageItem";
import { Link } from "react-router-dom";

const SearchResultPage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const shoeSearched = urlParams.get("item");

  const [searchData, setSearchData] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/api/search/${shoeSearched}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setSearchData(data);
        console.log(data);
      });
  }, [shoeSearched]);

  if (searchData) {
    return (
      <section className="main-holder">
        <h1>Search Results For {shoeSearched}</h1>
        <div className="result-large-item-holder">
          {searchData.map((item) => {
            return <ResultPageItem key={item} shoe={item} />;
          })}
        </div>
      </section>
    );
  } else {
    return <section className="main-holder"></section>;
  }
};

export default SearchResultPage;
