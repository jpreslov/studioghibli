import React from "react";
import "../index.css";

let Header = (props) => {
  return (
    <div className="row" id="header-div">
      <a href="index.html">
        <img id="logo" src={require("./images/logo.png")} alt="ghibli-logo" />
      </a>
    </div>
  );
};

export default Header