import React from "react";
import "./style.css"

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
        {/* <button className="navbar-toggler" type="button" data-toggle={"collapse"} data-target={"#navbarNav"} aria-controls={"navbarNav"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
          <span className="navbar-toggler-icon"><button className="btn btn-primary">Menu</button></span>
        </button> */}
        <div  id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/"> Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books/saved">Saved Books</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default TopNav;