import React, { useEffect, useState } from "react";
import "./App.css";
import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import PlusMinus from "./PlusMinus";
import Data from "./Data";
import superagent from "superagent";

function App() {
  const [data, setData] = React.useState({
    header: 0,
    left: 0,
    article: 0,
    right: 0,
    footer: 0,
  });

  // Function to update data using Superagent
  function update(section, value) {
    return new Promise((resolve, reject) => {
      var url = `/update/${section}/${value}`;
      superagent.get(url).end(function (err, res) {
        err ? reject(null) : resolve(res.body);
      });
    });
  }

  // Function to read data using Superagent
  function read() {
    return new Promise((resolve, reject) => {
      var url = "/data";
      superagent.get(url).end(function (err, res) {
        err ? reject(null) : resolve(res.body);
      });
    });
  }

  // Add this useEffect block to read data and update UI on component mount
  useEffect(() => {
    const response = read().then((res) => {
      setData(res);
    });
  }, []);

  // Add the handle function for updating data
  function handle(section) {
    const value = data[section.name] + section.value;
    const object = { ...data, [section.name]: value };
    console.log("New Data:", object);
    setData(object);

    // Update data in the server
    const response = update(section.name, value).then((res) => {
      console.log("Server Response:", res);
    });
  }
  return (
    <div className="App">
      <Header data={data} handle={handle} />
      <div className="grid">
        <Left data={data} handle={handle} />
        <Article data={data} handle={handle} />
        <Right data={data} handle={handle} />
      </div>
      <Footer data={data} handle={handle} />
      {/* <Data data={data} /> */}
    </div>
  );
}

export default App;
