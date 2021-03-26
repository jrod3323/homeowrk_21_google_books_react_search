import React from "react";
import "./style.css"

function SaveJumbo() {
  return (
    <div className="container mt-2">
      <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      
        <h1>Saved Google Books</h1>
        <p>Review The Books That You Are Interested In</p>
      </div>
    </div>
  );
}

export default SaveJumbo;