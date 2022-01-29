import "./style.css";

export default function Header() {
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
            <button id="search-button" type="submit">
              <img src="https://img.icons8.com/material/48/000000/search--v1.png" />
            </button>
            <input
              id="search-input"
              type="text"
              placeholder="Search For Shoes"
              autoComplete="off"
            ></input>
          </form>
        </article>
      </section>
      <div id="banner"></div>
    </header>
  );
}
