import React from "react";
import "./style.css"

function SearchJumbo() {
  return (
    <div className="container mt-2">
      <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="jumbotron"
      >
        <h1>Google Books Search</h1>
        <p>Search for and Save Books That You Are Interested In</p>
      </div>
    </div>
  );
}

export default SearchJumbo;