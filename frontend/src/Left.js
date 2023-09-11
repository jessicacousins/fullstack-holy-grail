import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Left = (props) => {
  return (
    <>
      <aside>
        <PlusMinus section="left" handle={props.handle} />
        <div className="section">Left:{props.data.left}</div>
        <Data data={props.data} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero
          maiores pariatur iure sit nemo quae unde qui veritatis modi voluptatum
          eius tempora omnis sint totam odio autem, consequuntur, a quibusdam
          accusamus error. Inventore optio nam sequi aperiam nostrum soluta
          assumenda, placeat officiis nulla eligendi quas voluptas, numquam ut
          facilis.{" "}
        </p>
      </aside>
    </>
  );
};

export default Left;
