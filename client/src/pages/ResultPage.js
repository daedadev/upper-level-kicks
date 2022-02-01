import { useEffect, useState } from "react";

const SearchResultPage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [searchData, setSearchData] = useState();

  useEffect(() => {
    const shoeSearched = urlParams.get("item");

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
  }, []);

  if (searchData) {
    return (
      <section>
        {searchData.map((item) => {
          return (
            <div>
              <h1>{item.shoeName}</h1>
            </div>
          );
        })}
      </section>
    );
  } else {
    return <section></section>;
  }
};

export default SearchResultPage;
