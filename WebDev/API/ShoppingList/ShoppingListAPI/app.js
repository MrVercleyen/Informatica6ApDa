const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "shoppingList.json");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/list", (req, res) => {
  fs.readFile(filepath, { encoding: "utf-8" }, function (err, data) {
    if (err == undefined || err === false) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log("ShoppingList API listening on port " + port);
});
