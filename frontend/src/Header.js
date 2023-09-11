import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Header = (props) => {
  return (
    <>
      <header className="section header">
        <PlusMinus section="header" handle={props.handle} />
        <div className="section">Header:{props.data.header}</div>
        <Data data={props.data} />
      </header>
    </>
  );
};

export default Header;
