import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function resetState() {
    setSearchInput("");
    setSearchResults([]);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/search/${searchInput}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((info) => info.json())
      .then((info) => {
        setSearchResults(info);
        console.log(info);
      });
  }, [searchInput]);

  return (
    <header id="header">
      <section id="header-holder">
        <article id="header-top-holder">
          <h3>Sneaker Application</h3>
          <nav>
            <a>about</a>
            <a>login</a>
            <a>sign up</a>
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
            >
              <button id="search-button" type="submit">
                <img src="https://img.icons8.com/material/48/000000/search--v1.png" />
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
            <section className="inline-search-holder">
              {searchResults.map((item) => {
                return (
                  <Link
                    to={{
                      pathname: `/result/?styleID=${item.styleID}&make=${item.silhoutte}`,
                    }}
                    onClick={resetState}
                  >
                    <div className="inline-search-item-holder">
                      <img src={item.thumbnail}></img>
                      <h1>{item.shoeName}</h1>
                    </div>
                  </Link>
                );
              })}
            </section>
          </form>
        </article>
      </section>
      <div id="banner"></div>
    </header>
  );
}
