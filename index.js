const express = require("express");
const connectToMongo = require("./db");

connectToMongo();

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}📡`);
});

//