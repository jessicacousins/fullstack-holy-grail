// var express = require("express");
// var app = express();
// var path = require("path");

// // Serve the build folder from the "frontend" CRA folder
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

// app.listen(3000, function () {
//   console.log("Express server is running on port: 3000");
// });

const express = require("express");
const app = express();
const path = require("path");
const Redis = require("ioredis");
const client = new Redis({ host: "localhost", port: 6379 });
const cors = require("cors");

// Use the cors middleware
app.use(cors());

// Initialize values
client.mset("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);

// Serve the build folder from the "frontend" CRA folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Get data
app.get("/data", function (req, res) {
  const keys = ["header", "left", "article", "right", "footer"];
  client.mget(keys, function (err, value) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const data = {
      header: Number(value[0]),
      left: Number(value[1]),
      article: Number(value[2]),
      right: Number(value[3]),
      footer: Number(value[4]),
    };

    console.log(data);
    res.send(data);
  });
});

// Update data
app.get("/update/:key/:value", function (req, res) {
  const key = req.params.key;
  let value = Number(req.params.value);
  client.get(key, function (err, reply) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    value = Number(reply) + value;
    client.set(key, value);

    const keys = ["header", "left", "article", "right", "footer"];
    client.mget(keys, function (err, value) {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const data = {
        header: Number(value[0]),
        left: Number(value[1]),
        article: Number(value[2]),
        right: Number(value[3]),
        footer: Number(value[4]),
      };

      console.log(data);
      res.send(data);
    });
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Listening on port 3000
app.listen(3000, function () {
  console.log("Express server is running on port: 3000");
});
