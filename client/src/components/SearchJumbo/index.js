import React from "react";
import "./style.css"

function SearchJumbo() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>Google Books Search</h1>
      <p>Search for and Save Books That You Are Interested In</p>
    </div>
  );
}

export default SearchJumbo;