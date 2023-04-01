const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var newItems = [];

app.get("/", function (req, res) {
  var today = new Date();

  var currentDayName = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(today);
  console.log(newItems);
  res.render("list", { kindOfDay: currentDayName, newListItem: newItems });
});

app.post("/", function (req, res) {
  var newItem = req.body.newItem;
  newItems.push(newItem);
  console.log(newItems);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Port 3000");
});
