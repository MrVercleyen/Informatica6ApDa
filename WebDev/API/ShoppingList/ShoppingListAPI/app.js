const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "shoppingList.json");

const app = express();
const port = 8080;

const data = [
  { name: "appel", price: "3", amount: "3" },
  { name: "peer", price: "1", amount: "2" },
];

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
  const data = JSON.stringify(req.body.lijst);

  fs.writeFile("shoppingList.json", data, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully!");
  });
});

app.listen(port, () => {
  console.log("ShoppingList API listening on port " + port);
});
