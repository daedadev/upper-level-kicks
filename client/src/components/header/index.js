import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showInlineSearch, setShowInlineSearch] = useState("search-off");

  function refreshSearch() {
    setSearchInput("");
    setSearchResults([]);
  }

  async function runSearch(input) {
    if (searchInput === "") {
      return;
    }

    try {
      await fetch(`http://localhost:3001/api/search/${searchInput}`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((info) => info.json())
        .then((info) => {
          setSearchResults(info);
          console.log(info);
          console.log("Response is " + info.ok);
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
              key={location.href}
              to={{
                pathname: `/search/?item=${searchInput}`,
              }}
              onClick={refreshSearch}
            >
              <button id="search-button" type="submit" onSubmit={refreshSearch}>
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
            {searchResults.map((item) => {
              return (
                <Link
                  to={{
                    pathname: `/result/${item.styleID}?make=${item.silhoutte}`,
                  }}
                  onClick={() => newShoeSearched(item.styleID, item.make)}
                >
                  <div className="inline-search-item-holder">
                    <img src={item.thumbnail} loading="lazy"></img>
                    <h1>{item.shoeName}</h1>
                  </div>
                </Link>
              );
            })}
          </section>
        </article>
      </section>
      <div id="banner"></div>
    </header>
  );
}
