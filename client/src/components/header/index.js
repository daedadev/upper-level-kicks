import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingInlineSearch from "../LoadingComponents/InlineSearchResult";
import "./style.css";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showInlineSearch, setShowInlineSearch] = useState("search-off");

  const [loaded, setLoaded] = useState(false);

  function refreshSearch(searchInput) {
    setSearchInput("");
    setSearchResults([]);
    window.location.href = `/search/${searchInput}`;
  }

  function reloadPage(searchInput) {
    setSearchInput("");
    setSearchResults([]);
    window.location.href = `/result/${item.shoeName}?style=${item.styleID}&make=${item.silhoutte}`;
  }

  async function runSearch(input) {
    if (searchInput === "") {
      return;
    }

    try {
      setLoaded(false);
      fetch(`http://localhost:3001/api/search/${input}`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((info) => info.json())
        .then((info) => {
          setLoaded(true);
          setSearchResults(info);
          console.log(info);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (searchInput === "") {
      setShowInlineSearch("search-off");
    } else {
      setShowInlineSearch("search-on");
    }
    console.log("Now Searching");

    runSearch(searchInput);
  }, [searchInput]);

  var loadedResults;

  if (searchResults) {
    loadedResults = searchResults.map((item) => {
      return (
        <Link
          key={item.styleID}
          to={{
            pathname: `/result/${item.shoeName}?style=${item.styleID}&make=${item.silhoutte}`,
          }}
        >
          <div className="inline-search-item-holder">
            <img src={item.thumbnail} loading="lazy"></img>
            <h1>{item.shoeName}</h1>
          </div>
        </Link>
      );
    });
  }

  var theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const loadingResults = theArray.map((item) => {
    return <LoadingInlineSearch />;
  });

  return (
    <header id="header">
      <section id="header-holder">
        <article id="header-top-holder">
          <Link
            to={{
              pathname: `/`,
            }}
          >
            <h3>Sneaker Application</h3>
          </Link>

          <nav>
            <a>about</a>
            <a href="/login">login</a>
            <a href="/login">sign up</a>
            <a>your closet</a>
          </nav>
        </article>
        <article id="header-search-holder">
          <form id="search-form">
            <Link
              key={searchInput}
              to={{
                pathname: `/search/${searchInput}`,
              }}
              onClick={() => refreshSearch(searchInput)}
            >
              <button id="search-button" type="submit">
                <img
                  src="https://img.icons8.com/material/48/000000/search--v1.png"
                  loading="lazy"
                />
              </button>
            </Link>
            <input
              id="search-input"
              type="text"
              placeholder="Search For Shoes"
              autoComplete="off"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>
          </form>
          <section id={showInlineSearch} className="inline-search-holder">
            {loaded ? loadedResults : loadingResults}
          </section>
        </article>
      </section>
      <div id="banner"></div>
    </header>
  );
}
