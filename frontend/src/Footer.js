import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Footer = (props) => {
  return (
    <>
      <footer>
        <PlusMinus section="footer" handle={props.handle} />
        <div className="section">Footer:{props.data.footer}</div>
        <Data data={props.data} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nam
          incidunt quo minus perspiciatis, deleniti dicta sapiente blanditiis
          sunt quis.
        </p>
      </footer>
    </>
  );
};

export default Footer;
