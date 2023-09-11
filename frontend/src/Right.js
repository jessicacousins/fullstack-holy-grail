import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Right = (props) => {
  return (
    <>
      <aside>
        <PlusMinus section="right" handle={props.handle} />
        <div className="section">Right:{props.data.right}</div>
        <Data data={props.data} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          doloremque accusamus voluptas dolores ab corrupti odit non praesentium
          nam quo. Est optio, nihil quis doloribus vel cupiditate non nesciunt
          provident assumenda qui placeat culpa odit natus minima omnis, eos
          quas voluptatum dolorum quibusdam quos similique veritatis at.
          Consequuntur, praesentium sint!
        </p>
      </aside>
    </>
  );
};

export default Right;
