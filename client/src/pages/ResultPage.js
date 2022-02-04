import { useContext, useEffect, useState } from "react";
import ResultPageItem from "../components/ResultPageItem";
import LoadingResultItem from "../components/LoadingComponents/ResultItem";
import { Link } from "react-router-dom";

const SearchResultPage = () => {
  const mainString = window.location.href.split("?")[0];

  const shoeSearched = mainString.substring(mainString.lastIndexOf("/") + 1);

  const [searchData, setSearchData] = useState();

  const [loaded, setLoaded] = useState(false);

  async function getItems() {
    setLoaded(false);

    await fetch(`/api/search/${shoeSearched}`, {
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
    setLoaded(true);
  }

  useEffect(() => {
    getItems();
  }, [shoeSearched]);

  var loadedItem;

  if (searchData) {
    loadedItem = searchData.map((item) => {
      return <ResultPageItem key={item.styleID} shoe={item} />;
    });
  }

  var loadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const loadingItem = loadArray.map((item) => {
    return <LoadingResultItem />;
  });

  return (
    <section className="main-holder">
      <h1 className="search-results-text">
        {loaded
          ? `Search Results For ${shoeSearched}`
          : "Loading Search Results"}
      </h1>
      <div className="result-large-item-holder">
        {loaded ? loadedItem : loadingItem}
      </div>
    </section>
  );
};

export default SearchResultPage;
